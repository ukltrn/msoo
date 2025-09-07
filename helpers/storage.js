import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_ONBOARD = 'hasOnboarded';
const KEY_AUTH = 'authMethod';

export async function getHasOnboarded() {
    try { return (await AsyncStorage.getItem(KEY_ONBOARD)) === 'true'; }
    catch { return false; }
}
export async function setHasOnboarded(v) {
    try { await AsyncStorage.setItem(KEY_ONBOARD, v ? 'true' : 'false'); }
    catch { }
}

export async function clearStorage(v) {
    try { await AsyncStorage.clear(); }
    catch { }
}


export async function getAuthMethod() {
    try { return await AsyncStorage.getItem(KEY_AUTH); }
    catch { return null; }
}
export async function setAuthMethod(method) {
    try { await AsyncStorage.setItem(KEY_AUTH, method); }
    catch { }
}
