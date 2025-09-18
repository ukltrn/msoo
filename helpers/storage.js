import AsyncStorage from '@react-native-async-storage/async-storage';

const hasOnboarded = 'hasOnboarded';
const signInMethod = 'signInMethod';

export async function getHasOnboarded() {
    try { return (await AsyncStorage.getItem(hasOnboarded)) === 'true'; }
    catch { return false; }
}
export async function setHasOnboarded(value) {
    try { await AsyncStorage.setItem(hasOnboarded, value ? 'true' : 'false'); }
    catch { }
}

export async function clearStorage() {
    try { await AsyncStorage.clear(); }
    catch { }
}


export async function getSignInMethod() {
    try { return await AsyncStorage.getItem(signInMethod); }
    catch { return null; }
}
export async function setSignInMethod(value) {
    try { await AsyncStorage.setItem(signInMethod, value); }
    catch { }
}
