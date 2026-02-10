import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "./global.css";

// impede splash de sumir antes das fontes
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    "Manrope-ExtraLight": require("@/../assets/fonts/Manrope-ExtraLight.ttf"),
    "Manrope-Light": require("@/../assets/fonts/Manrope-Light.ttf"),
    "Manrope-Regular": require("@/../assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Medium": require("@/../assets/fonts/Manrope-Medium.ttf"),
    "Manrope-SemiBold": require("@/../assets/fonts/Manrope-SemiBold.ttf"),
    "Manrope-Bold": require("@/../assets/fonts/Manrope-Bold.ttf"),
  });


  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // evita FOUC
  }

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SafeAreaProvider >
  );
}
