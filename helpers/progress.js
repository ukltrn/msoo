import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'viewedSCs';

export async function markSCViewed(scId) {
    const raw = await AsyncStorage.getItem(KEY);
    const viewed = raw ? JSON.parse(raw) : {};
    viewed[scId] = true;
    await AsyncStorage.setItem(KEY, JSON.stringify(viewed));
}

export async function getViewed() {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
}

export function computeProgressForSCs(viewed, scs) {
    const total = scs.length;
    const done = scs.filter(sc => viewed[sc.id]).length;
    return total > 0 ? Math.round((done / total) * 100) : 0;
}

export async function resetProgress() {
    await AsyncStorage.removeItem('viewedSCs');
}