import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useState, useCallback } from 'react';

import { AppHeader } from '../components/AppHeader';
import { ProgressBar } from '../components/ProgressBar';
import { Button } from '../components/Button';

import { colors } from '../theme';
import { getPrinciples } from '../data/wcag';
import { announce } from '../helpers/a11y';
import { getViewed, computeProgressForSCs, resetProgress } from '../helpers/progress';
import { clearStorage } from '../helpers/storage'


export default function PrinciplesScreen() {
    const nav = useNavigation();
    const principles = getPrinciples();

    const [overall, setOverall] = useState(0);
    const [principleMap, setPrincipleMap] = useState({});

    useFocusEffect(
        useCallback(() => {
            let active = true;
            (async () => {
                announce('WCAG Principles')
                const viewed = await getViewed();

                let totalSCs = 0;
                let totalDone = 0;
                const map = {};

                for (const p of principles) {
                    const scs = p.guidelines.flatMap(g => g.successCriteria || []);
                    map[p.id] = computeProgressForSCs(viewed, scs);

                    totalSCs += scs.length;
                    totalDone += scs.filter(sc => viewed[sc.id]).length;
                }

                if (active) {
                    setPrincipleMap(map);
                    setOverall(totalSCs ? Math.round((totalDone / totalSCs) * 100) : 0);
                }
            })();
            return () => { active = false; };
        }, [principles])
    );

    return (
        <View style={styles.screen}>
            <AppHeader title="WCAG Principles" showBack={false} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.list}>
                    {principles.map((p) => {
                        const progress = Math.round(principleMap[p.id] ?? 0);
                        return (
                            <Pressable
                                key={p.id}
                                accessibilityRole="button"
                                accessibilityLabel={`${p.id}. ${p.title}  ${p.summary}`}
                                accessibilityHint={`Opens ${p.title} principle.`}
                                accessibilityValue={{
                                    min: 0,
                                    max: 100,
                                    now: progress,
                                    text: `${progress}% complete`,
                                }}
                                onPress={() => nav.navigate('Guidelines', { principleId: p.id })}
                                style={styles.card}
                            >
                                <Text style={styles.title}>{p.id}. {p.title}</Text>
                                <Text style={styles.summary}>{p.summary}</Text>

                                {/* Progress Bar */}
                                <View style={{ marginTop: 8 }}>
                                    <ProgressBar value={principleMap[p.id] ?? 0} />
                                </View>

                            </Pressable>
                        );
                    })}
                </View>
            </ScrollView>

            {overall === 100 && (
                <Button
                    children="Reset progress"
                    label="Reset progress"
                    hint="Clears all saved progress."
                    onPress={async () => {
                        await resetProgress();
                        setOverall(0);
                        setPrincipleMap({});
                        nav.reset({ index: 0, routes: [{ name: 'Onboarding' }] });
                    }}
                />
            )}

            {/* TO DELETEEEEEE /////// */}
            <Pressable
                accessible={false}
                onLongPress={async () => {
                    await resetProgress();
                    await clearStorage()
                    nav.reset({ index: 0, routes: [{ name: 'Onboarding' }] });
                }} >
                <Text style={{ color: colors.primary, alignSelf: 'center', height: 50 }}></Text>
            </Pressable>

        </View>
    );
}
const styles = StyleSheet.create({
    screen: { flex: 1, paddingHorizontal: 16, backgroundColor: colors.background, gap: 16 },
    list: { gap: 12 },
    card: {
        marginHorizontal: 5,
        backgroundColor: colors.surface, padding: 16, borderRadius: 12,
        shadowColor: colors.shadow,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // Android
        elevation: 4,
    },
    title: { color: colors.text, fontWeight: '700', marginBottom: 6, fontSize: 20 },
    summary: { color: colors.textSubtle },
});
