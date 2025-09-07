import { useEffect, useCallback } from 'react';
import { View, Text, Pressable, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme';
import { Button } from '../components/Button';
import { announce } from '../helpers/a11y';
import { setHasOnboarded } from '../helpers/storage';

export default function OnboardingScreen() {
  const nav = useNavigation();

  useEffect(() => {
    announce('Welcome to Inclusive Design');
  }, []);

  const finish = useCallback(async () => {
    await setHasOnboarded(true);
    nav.reset({ index: 0, routes: [{ name: 'SignInOptions' }] });
  }, [nav]);


  return (
    <View style={styles.screen}>


      <ScrollView
        contentContainerStyle={styles.content}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require('../assets/onboarding/onboarding.png')}
          style={styles.image}
          accessibilityLabel="Illustration: inclusive design learning"
          accessibilityIgnoresInvertColors
        />

        <Text style={styles.title}>Design and Code for Everyone</Text>
        <Text style={styles.body}>
          Learn the rules of accessible design through fun, interactive challenges.
        </Text>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          label="Get Started"
          hint="Open sign in options"
          onPress={finish}
        >
          Start
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  topBar: { paddingHorizontal: 16, paddingTop: 8, alignItems: 'flex-end' },
  topAction: { fontSize: 16, color: colors.text },

  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },

  image: {
    width: '70%',
    height: 220,
    resizeMode: 'contain',
    marginVertical: 40,
  },

  title: {
    textAlign: 'center',
    color: colors.text,
    fontSize: 38,
    fontWeight: '700',
  },

  body: {
    color: colors.text,
    fontSize: 16,
    textAlign: 'center',
  },

  footer: { padding: 16, gap: 12, alignItems: 'center', alignItems: 'stretch' },
});
