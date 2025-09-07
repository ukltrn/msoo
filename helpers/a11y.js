import { AccessibilityInfo, Platform } from 'react-native';

let listeners = new Set();

export function subscribeAnnouncements(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
}

export async function announce(message) {

    listeners.forEach(fn => fn(message));

    try {
        if (Platform.OS === 'ios' && message) {
            await AccessibilityInfo.announceForAccessibility(message);
        }
    } catch (e) {

    }
}
