import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

export function ProgressBar({ value = 0, height = 10, showLabel = true }) {
  const pct = Math.max(0, Math.min(100, value));

  return (
    <View
      accessible
      accessibilityRole="progressbar"
      accessibilityLabel={`Progress ${pct} percent`}
      style={styles.wrap}
    >
      <View style={[styles.track, { height, borderRadius: height / 2 }]}>
        <View
          style={[
            styles.fill,
            { width: `${pct}%`, height, borderRadius: height / 2 }
          ]}
        />
      </View>
      {showLabel && (
        <Text style={styles.label}>{pct}%</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    gap: 4,
  },
  track: {
    backgroundColor: colors.border,
    overflow: 'hidden',
  },
  fill: {
    backgroundColor: colors.primary,
  },
  label: {
    color: colors.textSubtle,
    fontSize: 12,
  },
});
