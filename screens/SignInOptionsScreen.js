import { useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppHeader } from '../components/AppHeader';
import { colors } from '../theme';
import { announce } from '../helpers/a11y';
import { setAuthMethod } from '../helpers/storage';

export default function SignInOptionsScreen() {
    const nav = useNavigation();
    const canGoBack = nav.canGoBack();

    useEffect(() => {
        announce('Sign in options unavailable. You can continue as guest.');
    }, []);

    const goNext = () =>
        nav.reset({ index: 0, routes: [{ name: 'Principles' }] });

    const handleGuest = async () => {
        announce('Continuing as guest');
        await setAuthMethod('guest');
        goNext();
    };

    return (
        <>
            <AppHeader title="Sign in" showBack={canGoBack} onBack={() => { if (nav.canGoBack()) nav.goBack(); }} />
            <ScrollView>
                <View style={styles.screen}>

                    <Text accessibilityLabel="Sign in is currently unavailable, but you can continue as a guest." style={styles.copy}>
                        Sign in is currently unavailable, but you can continue as a guest.
                    </Text>

                    <Image
                        source={require('../assets/onboarding/signin.png')}
                        style={styles.image}
                        accessibilityLabel="Illustration: still building the app"
                        accessibilityIgnoresInvertColors
                    />

                    <Pressable
                        accessibilityRole="button"
                        accessibilityLabel="Continue as guest"
                        accessibilityHint="Skip sign in and start learning"
                        onPress={handleGuest}
                        style={({ pressed }) => [styles.btn, styles.primary, pressed && styles.pressed]}
                    >
                        <Text style={styles.btnTextPrimary}>Continue as guest</Text>
                    </Pressable>

                    <Text style={styles.terms}>
                        By continuing you agree to the demo terms. No real accounts are used.
                    </Text>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, padding: 16, backgroundColor: colors.background, gap: 16, paddingTop: '30%' },
    copy: { color: colors.text, textAlign: 'center', fontSize: 18 },
    stack: { gap: 12 },

    image: {
        width: '50%',
        resizeMode: 'contain',
        marginVertical: '20%',
        alignSelf: 'center'
    },


    btn: { borderRadius: 12, paddingVertical: 14, alignItems: 'center', borderWidth: 1 },
    pressed: { opacity: 0.9 },

    primary: { backgroundColor: colors.primary, borderColor: colors.primary },

    btnTextPrimary: { color: colors.onPrimary, fontWeight: '700', fontSize: 16 },

    terms: { color: colors.textSubtle, marginTop: 8, fontStyle: 'italic', textAlign: 'center' },
});
