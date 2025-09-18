import { useState, useMemo } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native';

import { colors } from '../theme';

import { AppHeader } from '../components/AppHeader';
import { ProgressBar } from '../components/ProgressBar';

import { getViewed, computeProgressForSCs } from '../helpers/progress';
import { getPrinciples, getGuidelinesByPrinciple } from '../data/wcag';
import { announce } from '../helpers/a11y';

export default function GuidelinesScreen() {
    const { params } = useRoute();
    const nav = useNavigation();

    const principles = useMemo(() => getPrinciples() || [], []);
    const defaultPrincipleId = principles[0]?.id ?? '1';
    const principleId = params?.principleId ?? defaultPrincipleId;

    const principle = useMemo(
        () => principles.find(p => p.id === String(principleId)) || null,
        [principles, principleId]
    );

    const guidelines = useMemo(
        () => getGuidelinesByPrinciple(principleId) || [],
        [principleId]
    );

    const [progressMap, setProgressMap] = useState({});

    useFocusEffect(() => {
        let active = true;

        (async () => {
            const viewed = await getViewed();
            if (!active) return;

            const map = {};
            for (const g of guidelines) {
                const scs = g.successCriteria || [];
                map[g.id] = computeProgressForSCs(viewed, scs);
            }
            if (!active) return;
            setProgressMap(map);

            announce(`Guidelines for ${principle?.title || `Principle ${principleId}`}`);
        })();

        return () => { active = false; };
    });

    return (
        <View style={styles.screen}>
            <AppHeader
                title={principle?.title ? principle.title : `Principle ${principleId}`}
                onBack={() => nav.replace('Principles')}
            />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View accessibilityRole="list" style={styles.list}>

                    {guidelines.map((g) => {
                        const progress = Math.round((progressMap[g.id] ?? 0));

                        return (<Pressable
                            accessible={true}
                            key={g.id}
                            accessibilityRole="button"
                            accessibilityLabel={`${g.id}. ${g.title} ${(g.successCriteria || []).length} success criteria`}
                            accessibilityHint="Opens the first success criterion!"
                            accessibilityValue={{
                                min: 0,
                                max: 100,
                                now: progress,
                                text: `${progress}% complete`,
                            }}
                            onPress={() => nav.navigate('SCDetail', {
                                principleId,
                                guidelineId: g.id,
                                scId: g.successCriteria?.[0]?.id,
                            })}
                            style={styles.card}
                        >
                            <Text style={styles.title}>{g.id} {g.title}</Text>
                            <Text style={styles.summary}>{(g.successCriteria || []).length} success criteria</Text>

                            {/* Progresss BAR */}
                            <View style={{ marginTop: 8 }}>
                                <ProgressBar value={progressMap[g.id] ?? 0} />
                            </View>
                        </Pressable>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, paddingHorizontal: 16, backgroundColor: colors.background, gap: 16 },
    list: { gap: 12 },
    card: {
        marginHorizontal: 5,
        backgroundColor: colors.card, padding: 16, borderRadius: 12,
        shadowColor: colors.shadow,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        //  Android
        elevation: 4,
    },
    title: { color: colors.text, fontWeight: '700', marginBottom: 6, fontSize: 20 },
    summary: { color: colors.textSubtle },
});
