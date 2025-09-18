import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import { Button } from '../components/Button'
import { colors } from '../theme';
import { announce } from '../helpers/a11y';
import { setSignInMethod } from '../helpers/storage';

export default function SignInOptionsScreen() {
    const nav = useNavigation();

    useEffect(() => {
        announce("Sign in page!");
    }, []);

    const goNext = () => nav.reset({ index: 0, routes: [{ name: 'Principles' }] });

    const handleGuest = async () => {
        await setSignInMethod('guest');
        goNext();
    };

    return (
        <View style={styles.screen} >
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <Text style={styles.copy}>
                    Sign in is currently unavailable, but you can continue as a guest.
                </Text>

                <Image
                    source={require('../assets/onboarding/signin.png')}
                    style={styles.image}
                    accessible={false}
                    importantForAccessibility="no"
                    accessibilityIgnoresInvertColors={true}
                />

                <View>
                    <Button
                        children="Continue as guest"
                        hint="Skips sign in, to start learning!"
                        onPress={handleGuest} />

                    <Text style={styles.terms}>
                        By continuing you agree to the demo terms. No real accounts are used.
                    </Text>
                </View>

            </ScrollView >
        </View >
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.background },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gap: 20,
    },
    copy: { color: colors.text, fontSize: 18, textAlign: 'center' },
    image: { width: '70%', height: 220, resizeMode: 'contain', },
    terms: { color: colors.textSubtle, marginTop: 8, fontStyle: 'italic', textAlign: 'center' },
});
