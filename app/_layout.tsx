import React, { ReactNode, useEffect } from "react";
import { useFonts } from "expo-font";
import { LogBox, Platform, StatusBar, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router/stack";
import Header from "@/components/layout/header";
import Div from "@/components/div";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    bold: require("./../assets/fonts/DMSans-Bold.ttf"),
    regular: require("./../assets/fonts/DMSans-Regular.ttf"),
    medium: require("./../assets/fonts/DMSans-Medium.ttf"),
  });

  useEffect(() => {
    LogBox.ignoreLogs([
      "Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?",
      "Require cycle: node_modules/victory",
    ]);
  }, []);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const paddingBar =
    Platform.OS === "android"
      ? 30
      : (StatusBar.currentHeight ? StatusBar.currentHeight : 0) + 15;

  const androidOrIos = Platform.OS === "ios" || Platform.OS === "android";
  const paddingTop = androidOrIos ? paddingBar : 0;
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" animated />
      <View style={{ flex: 1, paddingTop }}>
        <Header />
        <Div p={20} bg="white" flex={1}>
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerShown: false
            }}
          >
            <Stack.Screen name="index"  />
            <Stack.Screen name="detail/[id]"  />
          </Stack>
        </Div>
      </View>
    </>
  );
}
