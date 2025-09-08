import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { AppHeader } from '../components/AppHeader';
import { ProgressBar } from '../components/ProgressBar';
import { Button } from '../components/Button';
import { colors } from '../theme';
import { getPrinciples } from '../data/wcag';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useEffect, useState, useCallback } from 'react';
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
                const viewed = await getViewed();
                const principles = getPrinciples();

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
        }, [])
    );

    useEffect(() => {
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

            setPrincipleMap(map);
            setOverall(totalSCs ? Math.round((totalDone / totalSCs) * 100) : 0);
        })();
    }, [principles]);

    return (
        <View style={styles.screen}>
            <AppHeader title="WCAG Principles" showBack={false} />
            <ScrollView>
                <View accessibilityRole="list" style={styles.list}>
                    {principles.map((p) => (
                        <Pressable
                            accessible={true}
                            key={p.id}
                            accessibilityRole="button"
                            accessibilityLabel={`${p.id}. ${p.title}  ${p.summary}`}
                            onPress={() => nav.navigate('Guidelines', { principleId: p.id })}
                            style={styles.card}
                        >
                            <Text style={styles.title}>{p.id}. {p.title}</Text>
                            <Text style={styles.summary}>{p.summary}</Text>

                            {/* Progressssssssss Bar */}
                            <View style={{ marginTop: 8 }}>
                                <ProgressBar value={principleMap[p.id] ?? 0} showLabel />
                            </View>

                        </Pressable>
                    ))}
                </View>
            </ScrollView>

            {overall === 100 && (
                <Button
                    label="Reset progress"
                    hint="Clear all saved progress and restart"
                    onPress={async () => {
                        await resetProgress();
                        setOverall(0);
                        setPrincipleMap({});
                        nav.reset({ index: 0, routes: [{ name: 'Onboarding' }] });
                    }}
                >
                    Reset progress
                </Button>
            )}

            {/* TO DELETEEEEEE /////// */}
            <Pressable
                accessible={false}
                onLongPress={async () => {

                    await resetProgress();
                    await clearStorage()
                    nav.reset({ index: 0, routes: [{ name: 'Onboarding' }] });
                }} >
                <Text style={{ color: colors.link, alignSelf: 'center', height: 50 }}></Text>
            </Pressable>

        </View>
    );
}
const styles = StyleSheet.create({
    screen: { flex: 1, padding: 16, backgroundColor: colors.background, gap: 16 },
    list: { gap: 12 },
    card: {
        marginHorizontal: 5,
        backgroundColor: colors.surface, padding: 16, borderRadius: 12,
        shadowColor: '#111',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // Android
        elevation: 4,
    },
    title: { color: colors.text, fontWeight: '700', marginBottom: 6, fontSize: 20 },
    summary: { color: colors.textSubtle },
});
