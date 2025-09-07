import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, ActivityIndicator, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors, ThemeProvider } from './theme';
import { AnnouncementRegion } from './components/AnnouncementRegion';
import { getHasOnboarded, getAuthMethod } from './helpers/storage';

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
    background: colors.background,
  },
};

export default function App() {
  const [ready, setReady] = useState(false);
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [authMethod, setAuthMethodState] = useState(null);

  useEffect(() => {
    (async () => {
      const onboard = await getHasOnboarded();
      const auth = await getAuthMethod();
      setHasOnboarded(onboard);
      setAuthMethodState(auth);
      setReady(true);
    })();
  }, []);

  if (!ready) {
    return (
      <ThemeProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaView style={styles.root}>
            <View style={styles.centered}>
              <ActivityIndicator />
            </View>
          </SafeAreaView>
        </GestureHandlerRootView>
      </ThemeProvider>
    );
  }

  const initialRoute = !hasOnboarded ? 'Onboarding' : authMethod ? 'Principles' : 'SignInOptions';

  return (
    <ThemeProvider>
      <StatusBar style="auto" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer theme={navTheme}>
          <AnnouncementRegion />
          <SafeAreaView style={styles.root}>
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
          </SafeAreaView>
        </NavigationContainer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1, padding: 16 },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
