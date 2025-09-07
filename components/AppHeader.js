import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme';

export function AppHeader({ title, showBack, onBack, right }) {
    const nav = useNavigation();
    const canGoBack = nav.canGoBack();
    const showBackFinal = (showBack === undefined ? canGoBack : showBack);

    const handleBack = () => {
        if (onBack) return onBack();
        if (nav.canGoBack()) nav.goBack();
    };

    return (
        <View style={styles.root} accessibilityRole="header">
            {showBackFinal ? (
                <Pressable
                    accessibilityRole="button"
                    accessibilityLabel="Go back"
                    accessibilityHint="Navigates to the previous screen"
                    accessibilityState={{ disabled: !canGoBack }}
                    disabled={!canGoBack}
                    onPress={handleBack}
                    style={styles.backBtn}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <Text style={styles.backText}>Back</Text>
                </Pressable>
            ) : (
                <View style={styles.backBtn} />
            )}

            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                {title}
            </Text>

            <View style={styles.right}>
                {right ?? null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        paddingVertical: 12,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backBtn: {
        minWidth: 40,
        paddingVertical: 8,
    },
    backText: { color: colors.link },
    title: {
        flex: 1,
        textAlign: 'center',
        color: colors.text,
        fontSize: 20,
        fontWeight: '700',
    },
    right: {
        minWidth: 40,
        alignItems: 'flex-end',
    },
});
