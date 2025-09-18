import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

export function Button({ label, hint, onPress, children, disabled }) {
    return (
        <Pressable
            accessibilityRole="button"
            accessibilityLabel={label}
            accessibilityHint={hint}
            onPress={onPress}
            disabled={disabled}
            style={({ pressed }) => [
                styles.base,
                disabled ? styles.disabled : styles.enabled,
                pressed && styles.pressed,
            ]}
        >
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    base: { alignSelf: 'stretch', paddingVertical: 14, borderRadius: 12 },
    enabled: { backgroundColor: colors.primary },
    disabled: { opacity: 0.7 },
    pressed: { opacity: 0.9 },
    text: {
        color: colors.onPrimary, fontWeight: '700', fontSize: 18, textAlign: 'center'
    },
});
