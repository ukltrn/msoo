import { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors, ThemeProvider } from './theme';
import { getHasOnboarded, getSignInMethod } from './helpers/storage';
import { AnnouncementRegion } from './components/AnnouncementRegion';

import OnboardingScreen from './screens/OnboardingScreen';
import SignInOptionsScreen from './screens/SignInOptionsScreen';
import PrinciplesScreen from './screens/PrinciplesScreen';
import GuidelinesScreen from './screens/GuidelinesScreen';
import SCDetailScreen from './screens/SCDetailScreen';
import QuizScreen from './screens/QuizScreen';

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export default function App() {
  const [ready, setReady] = useState(false);
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [authMethod, setSignInMethod] = useState(null);

  useEffect(() => {
    (async () => {
      const onboard = await getHasOnboarded();
      const auth = await getSignInMethod();
      setHasOnboarded(onboard);
      setSignInMethod(auth);
      setReady(true);
    })();
  }, []);

  if (!ready) {
    return (
      <ThemeProvider>
        <View style={styles.screen}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </ThemeProvider>
    );
  }

  const initialRoute = !hasOnboarded ? 'Onboarding' : !authMethod ? 'SignInOptions' : 'Principles';

  return (
    <ThemeProvider>
      <StatusBar style="light" />
      <NavigationContainer theme={navTheme}>
        <View style={styles.screen}>
          <AnnouncementRegion />
          <View style={styles.content}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
              <Stack.Screen name="Onboarding" component={OnboardingScreen} />
              <Stack.Screen name="SignInOptions" component={SignInOptionsScreen} />
              <Stack.Screen name="Principles" component={PrinciplesScreen} />
              <Stack.Screen name="Guidelines" component={GuidelinesScreen} />
              <Stack.Screen name="SCDetail" component={SCDetailScreen} />
              <Stack.Screen name="Quiz" component={QuizScreen} />
            </Stack.Navigator>
          </View>
        </View>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, justifyContent: 'center', },
  content: { flex: 1, padding: 16 },
});
