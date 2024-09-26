import "react-native-gesture-handler";
import React, { useEffect, useState, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, View, Image, StyleSheet } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import SplashScreenComponent from "./src/screens/SplashScreen";
import HomeScreen from "./src/screens/HomeScreen";
import VideoScreen from "./src/screens/VideoScreen";
import DummyScreen from "./src/screens/DummyScreen";
import HomeLogoSVGComponent from "./src/components/HomeLogoSVGComponent";
import Home2LogoSVGComponent from "./src/components/Home2LogoSVGComponent";
import MediaLogoSVGComponent from "./src/components/MediaLogoSVGComponent";
import Media2LogoSVGComponent from "./src/components/Media2LogoSVGComponent";
import GamesLogoSVGComponent from "./src/components/GamesLogoSVGComponent";
import ReportsLogoSVGComponent from "./src/components/ReportsLogoSVGComponent";
import { BottomTabParamList } from "./src/types/types";
import accountPng from "./assets/account.png";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route, navigation }) => {
      const currentRouteName =
        navigation.getState().routes[navigation.getState().index].name;
      const isMediaRoute = currentRouteName === "Media";
      const inactiveColor = isMediaRoute ? "white" : "black"; // Set inactive color based on route

      return {
        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent;

          switch (route.name) {
            case "HomeTab":
              IconComponent = isMediaRoute
                ? Home2LogoSVGComponent
                : HomeLogoSVGComponent; // Use HOME outlined SVG version when Media tab is active
              break;
            case "Media":
              IconComponent = focused
                ? Media2LogoSVGComponent
                : MediaLogoSVGComponent; // Use MEDIA filled SVG version when focused
              break;
            case "Games":
              IconComponent = GamesLogoSVGComponent;
              break;
            case "Reports":
              IconComponent = ReportsLogoSVGComponent;
              break;
            case "Account":
              IconComponent = () => (
                <View style={styles.iconContainer}>
                  <Image source={accountPng} style={styles.iconImage} />
                </View>
              );
              break;
            default:
              IconComponent = HomeLogoSVGComponent;
          }

          return (
            // Add a top border to the icon when focused / active
            <View
              style={{
                position: "relative",
                alignItems: "center",
                paddingVertical: Platform.select({
                  ios: 10,
                  android: 17,
                }),
              }}
            >
              {focused && (
                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    width: 66,
                    height: 3,
                    borderBottomLeftRadius: 2,
                    borderBottomRightRadius: 2,
                    backgroundColor: isMediaRoute ? "white" : "#3361BA", // Change top border color based on route
                  }}
                />
              )}
              <IconComponent width={size} height={size} fill={color} />
            </View>
          );
        },
        tabBarActiveTintColor: isMediaRoute ? "white" : "#3361BA", // Change active icon color based on route
        tabBarInactiveTintColor: inactiveColor, // Change inactive icon color based on route
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: "SFProText-Semibold",
          marginBottom: Platform.OS === "android" ? 10 : 0,
        },
        tabBarStyle: {
          height: Platform.select({
            ios: 80,
            android: 75,
          }),
          paddingVertical: Platform.select({
            ios: 8,
            android: 15,
          }),
          backgroundColor: isMediaRoute ? "#151414" : "white", // Change background color based on route
        },
      };
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Media"
      component={VideoScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Games"
      component={DummyScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Reports"
      component={DummyScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Account"
      component={DummyScreen}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  iconContainer: {
    width: 25,
    height: 25,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: 28,
    height: 28,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: "#3361BA",
  },
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  /* FONT WEIGHTS from Figma file:
  ----------------------------------------------
  Regular = 400, Medium = 500, Semibold = 600 */

  const loadFonts = async () => {
    await Font.loadAsync({
      "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
      "SFProText-Medium": require("./assets/fonts/SF-Pro-Text-Medium.otf"),
      "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreenComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeStack"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Video"
          component={VideoScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
