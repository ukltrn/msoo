import { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet, AccessibilityInfo, findNodeHandle, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AppHeader } from '../components/AppHeader';
import { colors } from '../theme';
import { announce } from '../helpers/a11y';
import { getGuideline } from '../data/wcag';

import ResultBadge from '../components/ResultBadge';

export default function QuizScreen() {
    const { params } = useRoute();
    const nav = useNavigation();
    const { principleId, guidelineId } = params || {};

    const guideline = getGuideline(principleId, guidelineId);
    const questions = guideline?.quiz?.questions || [];

    const qs = useMemo(() => {
        const rnd = 3 + Math.floor(Math.random() * 3);
        const count = Math.min(questions.length, rnd);
        return sampleWithoutReplacement(questions, count);
    }, [guidelineId, questions.length]);

    const [i, setI] = useState(0);
    const [selected, setSelected] = useState(null);
    const [revealed, setRevealed] = useState(false);
    const [score, setScore] = useState(0);
    const [done, setDone] = useState(false);

    const stemRef = useRef(null);
    const feedbackRef = useRef(null);

    useEffect(() => {
        announce(`Quiz for guideline ${guidelineId}`);
    }, [guidelineId]);


    useEffect(() => {
        if (!done) {
            const handle = findNodeHandle(stemRef.current);
            if (handle) setTimeout(() => AccessibilityInfo.setAccessibilityFocus(handle), 50);
        }
    }, [i, done]);

    if (!questions.length) {
        return (
            <View style={styles.screen}>
                <AppHeader title={`Quiz: ${guidelineId}`} showBack={false} />
                <View style={styles.card}>
                    <Text style={styles.p}>No quiz available for this guideline.</Text>
                </View>
                <Pressable
                    accessibilityRole="button"
                    accessibilityLabel="Back to guidelines"
                    onPress={() => nav.replace('Guidelines', { principleId })}
                    style={styles.primaryBtn}
                >
                    <Text style={styles.primaryBtnText}>Back to guidelines</Text>
                </Pressable>
            </View>
        );
    }

    const q = qs[i];
    const correctOpt = q.options.find(o => o.isCorrect);

    const onSelect = (optId) => {
        if (revealed) return;
        setSelected(optId);

        const chosen = q.options.find(o => o.id === optId);
        const isCorrect = !!chosen?.isCorrect;

        if (isCorrect) setScore(s => s + 1);
        setRevealed(true);


        const msg = isCorrect
            ? 'That is correct.'
            : `That is incorrect. The correct answer is ${correctOpt?.label}`;
        setTimeout(() => {
            announce(msg);
            const fh = findNodeHandle(feedbackRef.current);
            if (fh) AccessibilityInfo.setAccessibilityFocus(fh);
        }, 50);
    };

    const onNext = () => {
        if (!revealed) return;
        const last = i >= qs.length - 1;
        if (last) {
            setDone(true);
            const pct = Math.round((score / qs.length) * 100);
            announce(`Quiz completed. Score ${pct} percent.`);
            return;
        }

        setI(i + 1);
        setSelected(null);
        setRevealed(false);
        announce(`Question ${i + 2} of ${qs.length}`);
    };

    const onRetry = () => {
        setI(0);
        setSelected(null);
        setRevealed(false);
        setScore(0);
        setDone(false);
        announce('Quiz restarted');
    };

    const onFinish = () => {
        nav.replace('Guidelines', { principleId });
    };

    return (
        <View style={styles.screen}>
            <AppHeader
                title={`Quiz: ${guideline.id} ${guideline.title}`}
                showBack={false}
            />

            {!done ? (
                <>
                    <ScrollView>
                        <View style={styles.stack}>
                            <Text style={styles.meta}>Question {i + 1} of {qs.length}</Text>

                            <Text
                                ref={stemRef}
                                style={styles.stem}
                                accessibilityRole="header"
                            >
                                {q.stem}
                            </Text>

                            <View style={styles.optionsWrap} accessibilityRole="radiogroup">
                                {q.options.map(opt => {
                                    const isSel = selected === opt.id;
                                    const isRight = !!opt.isCorrect;


                                    let boxStyle = styles.optionIdle;
                                    let textStyle = styles.optionText;
                                    if (!revealed && isSel) { boxStyle = styles.optionSelected; textStyle = styles.optionTextSelected; }
                                    if (revealed && isRight) { boxStyle = styles.optionCorrect; textStyle = styles.optionTextCorrect; }
                                    if (revealed && !isRight && isSel) { boxStyle = styles.optionWrong; textStyle = styles.optionTextWrong; }

                                    return (
                                        <Pressable
                                            key={opt.id}
                                            accessibilityRole="radio"
                                            accessibilityState={{ selected: isSel, disabled: revealed }}
                                            accessibilityLabel={opt.label}
                                            onPress={() => onSelect(opt.id)}
                                            disabled={revealed}
                                            style={[styles.option, boxStyle]}
                                        >
                                            <Text style={textStyle}>{opt.label}</Text>
                                        </Pressable>
                                    );
                                })}
                            </View>

                            {revealed && (
                                <View
                                    ref={feedbackRef}
                                    accessible
                                    accessibilityRole="alert"
                                    style={styles.feedbackWrap}
                                >
                                    <Text style={styles.feedbackText}>
                                        {q.options.find(o => o.id === selected)?.isCorrect ? 'Correct' : 'Incorrect'}
                                    </Text>
                                    {!q.options.find(o => o.id === selected)?.isCorrect && correctOpt && (
                                        <Text style={styles.feedbackText}>Correct answer: {correctOpt.label}</Text>
                                    )}
                                </View>
                            )}


                        </View>
                    </ScrollView>

                    <Pressable
                        accessibilityRole="button"
                        accessibilityLabel={i < qs.length - 1 ? 'Next question' : 'Submit quiz'}
                        onPress={onNext}
                        style={[styles.primaryBtn, !revealed && styles.btnDisabled]}
                        disabled={!revealed}
                    >
                        <Text style={styles.primaryBtnText}>
                            {i < qs.length - 1 ? 'Next' : 'Submit'}
                        </Text>
                    </Pressable>
                </>
            ) : (
                <>
                    <ScrollView>
                        <View style={styles.stack}>
                            <View ref={feedbackRef} accessible accessibilityRole="summary">

                                <ResultBadge pct={Math.round((score / qs.length) * 100)} />

                                <Text style={styles.paragraph}>
                                    You answered {score} out of {qs.length} correctly.
                                </Text>
                                <Text style={styles.tip}>
                                    Tip: Review the guideline and try again to boost your best score.
                                </Text>
                            </View>


                        </View>
                    </ScrollView>
                    <View style={styles.row}>

                        <Pressable accessibilityRole="button" onPress={onFinish} style={styles.primaryBtn}>
                            <Text style={styles.primaryBtnText}>Back to guidelines</Text>
                        </Pressable>
                        <Pressable accessibilityRole="button" onPress={onRetry} style={styles.secondaryBtn}>
                            <Text style={styles.secondaryBtnText}>Retry</Text>
                        </Pressable>
                    </View>
                </>

            )
            }
        </View >
    );
}

function sampleWithoutReplacement(arr, n) {
    const copy = [...arr];
    const out = [];
    const k = Math.min(n, copy.length);
    for (let i = 0; i < k; i++) {
        const idx = Math.floor(Math.random() * copy.length);
        out.push(copy.splice(idx, 1)[0]);
    }
    return out;
}

const styles = StyleSheet.create({
    screen: { flex: 1, padding: 16, backgroundColor: colors.background, gap: 16 },
    stack: { gap: 16 },

    h1: { color: colors.text, fontWeight: '700', fontSize: 20 },
    meta: { color: colors.textSubtle },
    stem: { color: colors.text, fontWeight: '700', fontSize: 18 },

    paragraph: { color: colors.text, textAlign: 'center', fontWeight: '700', fontSize: 18 },
    tip: { color: colors.textSubtle, textAlign: 'center', fontStyle: 'italic', fontSize: 16 },
    optionsWrap: { gap: 12 },
    option: {
        borderRadius: 12,
        padding: 14,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
    },
    optionIdle: {},
    optionSelected: { borderColor: colors.primary },
    optionCorrect: { borderColor: '#2e7d32', backgroundColor: '#cef3da' },
    optionWrong: { borderColor: '#c62828', backgroundColor: '#ffdddd' },

    optionText: { color: colors.text },
    optionTextSelected: { color: colors.text, fontWeight: '700' },
    optionTextCorrect: { color: '#1b5e20', fontWeight: '700' },
    optionTextWrong: { color: '#c71c1c', fontWeight: '700' },

    feedbackWrap: { gap: 6 },
    feedbackText: { color: colors.text, fontWeight: '600' },

    primaryBtn: {
        backgroundColor: colors.primary,
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
    },
    primaryBtnText: { color: colors.onPrimary, fontWeight: '700', fontSize: 18 },
    secondaryBtn: {
        backgroundColor: colors.surface,
        borderRadius: 12,
        paddingVertical: 14,
        marginVertical: 14,
        alignItems: 'center',
    },
    secondaryBtnText: {
        color: colors.text,
        fontWeight: '700',
        fontSize: 18
    },
    btnDisabled: { opacity: 0.7 },

    card: { backgroundColor: colors.surface, borderRadius: 12, padding: 12 },
});
