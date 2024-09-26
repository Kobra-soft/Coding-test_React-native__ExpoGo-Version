import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/types";
import EKLogoSVGComponent from "../components/EKLogoSVGComponent";

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Splash"
>;

type Props = {
  navigation: SplashScreenNavigationProp;
};

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAppData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading app data:", error);
      }
    };

    loadAppData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      navigation.replace("HomeStack");
    }
  }, [isLoading, navigation]);

  return (
    <View style={styles.container}>
      <EKLogoSVGComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEFEFE",
  },
  text: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default SplashScreen;
