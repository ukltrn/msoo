import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

export function ProgressBar({ value = 0, height = 10 }) {

  return (
    <View accessibilityRole="progressbar" style={styles.wrap}>
      <View style={[styles.track, { height, borderRadius: height / 2 }]}>
        <View style={[styles.fill, { width: `${value}%`, height, borderRadius: height / 2 }]} />
      </View>
      <Text style={styles.label}>{value}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { width: '100%', gap: 4, marginTop: 10 },
  track: { backgroundColor: colors.border, overflow: 'hidden', },
  fill: { backgroundColor: colors.primary, },
  label: { color: colors.textSubtle, fontSize: 12, },
});
