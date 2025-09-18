import { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../theme';
import { Button } from '../components/Button';
import { announce } from '../helpers/a11y';
import { setHasOnboarded } from '../helpers/storage';

export default function OnboardingScreen() {
  const nav = useNavigation();

  useEffect(() => {
    announce("Welcome to Accessible Design!");
  }, []);

  const finish = useCallback(async () => {
    await setHasOnboarded(true);
    nav.reset({ index: 0, routes: [{ name: 'SignInOptions' }] });
  }, [nav]);


  return (
    <View style={styles.screen}>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Image
          accessible={false}
          importantForAccessibility="no"
          accessibilityIgnoresInvertColors={true}
          source={require('../assets/onboarding/onboarding.png')}
          style={styles.image}
        />
        <Text accessibilityRole="header" style={styles.title}>Design and Code for Everyone</Text>
        <Text style={styles.body}>Learn the rules of accessible design through fun, interactive challenges.</Text>
      </ScrollView>

      <View style={styles.footer}>
        <Button children="Start" hint="Opens sign in options." onPress={finish} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: {
    flexGrow: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  image: {
    width: '70%', height: 220, resizeMode: 'contain',
    marginVertical: 40,
  },
  title: {
    textAlign: 'center', color: colors.text,
    fontSize: 38, fontWeight: '700',
  },
  body: {
    color: colors.text, fontSize: 16,
    textAlign: 'center',
  },
  footer: { padding: 16, gap: 12, alignItems: 'center' },
});
