import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { AppHeader } from '../components/AppHeader';
import { colors } from '../theme';
import { getPrinciples, getGuidelinesByPrinciple } from '../data/wcag';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useEffect, useState, useMemo } from 'react';
import { announce } from '../helpers/a11y';
import { getViewed, computeProgressForSCs } from '../helpers/progress';
import { ProgressBar } from '../components/ProgressBar';

export default function GuidelinesScreen() {
    const { params } = useRoute();
    const nav = useNavigation();
    const canGoBack = nav.canGoBack();

    const [progressMap, setProgressMap] = useState({});


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

    useEffect(() => {
        (async () => {
            const viewed = await getViewed();
            const map = {};
            for (const g of guidelines) {
                map[g.id] = computeProgressForSCs(viewed, g.successCriteria || []);
            }
            setProgressMap(map);
        })();
    }, [guidelines]);

    useEffect(() => {
        announce(`Guidelines for ${principle?.title || `Principle ${principleId}`}`);
    }, [principleId, principle?.title]);

    return (
        <View style={styles.screen}>
            <AppHeader
                title={principle?.title ? principle.title : `Principle ${principleId}`}
                showBack={canGoBack}
                onBack={() => nav.replace('Principles')}
            />
            <ScrollView>

                <View accessibilityRole="list" style={styles.list}>
                    {guidelines.map((g) => (
                        <Pressable
                            accessible={true}
                            key={g.id}
                            accessibilityRole="button"
                            accessibilityLabel={`${g.id}. ${g.title}. ${g.successCriteria?.length || 0} success criteria.`}
                            accessibilityHint="Opens the first success criterion"
                            accessibilityValue={{
                                min: 0,
                                max: 100,
                                now: Math.round((progressMap[g.id] ?? 0) * 100),
                                text: `${Math.round((progressMap[g.id] ?? 0) * 100)}% complete`,
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
                                <ProgressBar accessible={false} value={progressMap[g.id] ?? 0} showLabel />
                            </View>
                        </Pressable>
                    ))}
                </View>
            </ScrollView>
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
