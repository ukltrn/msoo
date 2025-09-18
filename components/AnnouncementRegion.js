import { useEffect, useState } from 'react';
import { Platform, Text, StyleSheet } from 'react-native';
import { subscribeAnnouncements } from '../helpers/a11y';

export function AnnouncementRegion() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const unsubscribe = subscribeAnnouncements(setMessage);
        return unsubscribe;
    }, []);

    return (
        <Text accessibilityLiveRegion={Platform.OS === 'android' ? 'polite' : 'none'} style={styles.screenReadersOnly} >
            {message}
        </Text>
    );
}
const styles = StyleSheet.create({ screenReadersOnly: { height: 0, width: 0, opacity: 0 } });
