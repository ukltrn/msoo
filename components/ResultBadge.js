import { View, Image, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

const IMAGES = {
    excellent: require('../assets/feedback/excellent.png'),
    great: require('../assets/feedback/great.png'),
    good: require('../assets/feedback/good.png'),
    try: require('../assets/feedback/try.png'),
};

export default function ResultBadge({ pct = 0 }) {
    let key = 'try';
    let title = 'Keep practicing!';

    if (pct >= 90) { key = 'excellent'; title = 'Outstanding!'; }
    else if (pct >= 70) { key = 'great'; title = 'Great job!'; }
    else if (pct >= 45) { key = 'good'; title = 'Nice progress!'; }

    return (
        <View
            accessible
            accessibilityRole="image"
            accessibilityLabel={`${title}. Score ${pct} percent.`}
            style={styles.wrap}
        >
            <Image
                accessible
                accessibilityLabel="Illustration!"
                source={IMAGES[key]}
                style={styles.img}
                resizeMode="contain" />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.sub}>{pct}%</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: { alignItems: 'center', gap: 6, marginVertical: 20 },
    img: { width: '80%' },
    title: { color: colors.text, fontWeight: '700', fontSize: 30 },
    sub: { color: colors.primary, fontWeight: '900', fontSize: 60 },
});
