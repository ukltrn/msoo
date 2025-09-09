import { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Linking, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AppHeader } from '../components/AppHeader';
import { colors } from '../theme';
import { getSCs } from '../data/wcag';
import { announce } from '../helpers/a11y';
import { markSCViewed } from '../helpers/progress';

export default function SCDetailScreen() {
    const { params } = useRoute();
    const navigation = useNavigation();
    const { principleId, guidelineId, scId } = params || {};

    const allSC = getSCs(principleId, guidelineId);
    const startIndex = Math.max(0, allSC.findIndex((x) => x.id === scId));
    const [index, setIndex] = useState(startIndex);
    const sc = allSC[index];

    useEffect(() => {
        if (sc?.id) {
            announce(`${sc.id} ${sc.shortTitle} ${sc.level}`);
            markSCViewed(sc.id);
        }
    }, [sc?.id]);

    if (!sc) return null;

    const isFirst = index === 0;
    const isLast = index === allSC.length - 1;

    const onPrev = () => setIndex((i) => Math.max(0, i - 1));

    const onNext = () => {
        if (isLast) {
            navigation.navigate('Quiz', { principleId, guidelineId });
        } else {
            setIndex((i) => i + 1);
        }
    };

    return (
        <View style={styles.screen}>
            <AppHeader title={`Guideline ${guidelineId}`} showBack />

            <SCSection
                sc={sc}
                onPrev={onPrev}
                onNext={onNext}
                isFirst={isFirst}
                isLast={isLast}
            />
        </View>
    );
}

function SCSection({ sc, onPrev, onNext, isFirst, isLast }) {
    return (
        <>
            <ScrollView>
                <View style={styles.stack}>
                    <View style={styles.row}>
                        <Text style={styles.scTitle}>{sc.id}: {sc.shortTitle}</Text><Text style={styles.scLevel}>({sc.level})</Text>
                    </View>
                    {!!sc.description && <Text style={styles.p}>{sc.description}</Text>}

                    {renderExample(sc.example)}

                    <View style={styles.links}>
                        <Text style={styles.h6}>Learn more</Text>
                        {!!sc.resources?.understandingUrl && (
                            <Pressable
                                accessibilityRole="link"
                                accessibilityLabel="W3C Understanding"
                                accessibilityHint="Open W3C Understanding"
                                onPress={() => Linking.openURL(sc.resources.understandingUrl)}
                            >
                                <Text style={styles.link}>W3C Understanding</Text>
                            </Pressable>
                        )}
                        {!!sc.resources?.specUrl && (
                            <Pressable
                                accessibilityRole="link"
                                accessibilityLabel="WCAG spec"
                                accessibilityHint="Open WCAG spec"
                                onPress={() => Linking.openURL(sc.resources.specUrl)}
                            >
                                <Text style={styles.link}>WCAG Spec</Text>
                            </Pressable>
                        )}
                    </View>


                </View>
            </ScrollView >

            <View style={styles.row}>
                <Pressable
                    accessibilityRole="button"
                    accessibilityLabel="Previous Success Criterion"
                    onPress={onPrev}
                    disabled={isFirst}
                    style={[styles.secondaryBtn, isFirst && styles.btnDisabled]}
                >
                    <Text style={styles.secondaryBtnText}>Previous</Text>
                </Pressable>
                <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={isLast ? 'Start quiz' : 'Next Success Criterion'}
                    onPress={onNext}
                    style={styles.primaryBtn}
                >
                    <Text style={styles.primaryBtnText}>{isLast ? 'Start quiz' : 'Next'}</Text>
                </Pressable>
            </View>
        </>
    );
}

function renderExample(example) {
    if (!example) {
        return (
            <View style={styles.card}>
                <Text style={styles.subtle}>Example coming soon.</Text>
            </View>
        );
    }

    const renderCard = (it, key = it?.id || 'single') => {
        if (!it?.uri) return null;
        const isPassing = it.isPassing ?? true;
        let passing = isPassing ? 'Pass: ' : 'Fail: '
        let caption = passing + it.caption
        return (
            <View key={key} style={styles.exampleCard}>
                <Image
                    source={it.uri}
                    accessibilityLabel={it.alt}
                    style={styles.exampleImg}
                    accessibilityIgnoresInvertColors
                />
                <View style={[styles.exampleCapWrap, isPassing ? styles.exampleCapPass : styles.exampleCapFail]}>
                    <Text
                        accessibilityLabel={caption}
                        style={styles.exampleCapText}>
                        {caption}
                    </Text>
                </View>
            </View>
        );
    };

    if (example.type === 'image' && example.item) {
        return (
            <View style={styles.stackSm}>
                {example.note ? <Text style={styles.subtle}>{example.note}</Text> : null}
                {renderCard(example.item)}
            </View>
        );
    }

    if (example.type === 'images' && Array.isArray(example.items)) {
        return (
            <View style={styles.stackSm}>
                {example.note ? <Text style={styles.subtle}>{example.note}</Text> : null}
                <View style={styles.stackSm}>
                    {example.items.map((it, idx) => renderCard(it, it.id ?? String(idx)))}
                </View>
            </View>
        );
    }

    return (
        <View style={styles.card}>
            <Text style={styles.subtle}>Example coming soon.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, padding: 16, backgroundColor: colors.background },
    stack: { gap: 16 },
    stackSm: { flex: 'row', gap: 12 },

    scTitle: { color: colors.text, fontWeight: '700', fontSize: 18 },
    scLevel: { color: colors.primary, fontWeight: '700', fontSize: 18 },
    p: { color: colors.text, fontSize: 18 },
    subtle: { color: colors.textSubtle, fontSize: 18 },

    links: { gap: 6, marginTop: 8 },
    h6: { color: colors.text, fontWeight: '600', fontSize: 18 },
    link: { color: colors.link, fontWeight: '700', fontSize: 22, margin: 10 },

    row: { flexDirection: 'row', gap: 6, marginTop: 12 },
    primaryBtn: { backgroundColor: colors.primary, borderRadius: 15, paddingVertical: 14, alignItems: 'center', flex: 1 },
    primaryBtnText: { color: colors.onPrimary, fontWeight: '700', fontSize: 16 },
    secondaryBtn: { backgroundColor: colors.surface, borderRadius: 15, borderWidth: 1, borderColor: colors.primary, paddingVertical: 14, alignItems: 'center', flex: 1, fontWeight: '700' },
    secondaryBtnText: { color: colors.text },
    btnDisabled: { opacity: 0.6 },
    card: { backgroundColor: colors.surface, borderRadius: 12, padding: 12 },

    exampleCard: { backgroundColor: colors.surface, borderRadius: 12, overflow: 'hidden' },
    exampleImg: { width: '100%', height: 200, backgroundColor: colors.surface, resizeMode: 'cover' },
    exampleCapFail: { backgroundColor: colors.error },
    exampleCapPass: { backgroundColor: colors.success },
    exampleCapWrap: { padding: 12 },
    exampleCapText: { color: '#000', fontWeight: '600' },
});
