import { useEffect, useState } from 'react';
import { Platform, Text, StyleSheet } from 'react-native';
import { subscribeAnnouncements } from '../helpers/a11y';

export function AnnouncementRegion() {
    const [msg, setMsg] = useState('');

    useEffect(() => {
        const unsubscribe = subscribeAnnouncements(setMsg);
        return unsubscribe;
    }, []);

    return (
        <Text
            accessibilityLiveRegion={Platform.OS === 'android' ? 'polite' : 'none'}
            style={styles.srOnly}
        >
            {msg}
        </Text>
    );
}
const styles = StyleSheet.create({ srOnly: { height: 0, width: 0, opacity: 0 } });
