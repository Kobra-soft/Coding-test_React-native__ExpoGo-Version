import React from "react";
import { View, Text, StyleSheet, PixelRatio } from "react-native";

const pxToDp = (px: number) => {
  const fontScale = PixelRatio.getFontScale();
  return px * fontScale;
};

const DummyScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dummy Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#0A0C0B",
    fontSize: pxToDp(20),
    fontFamily: "SFProText-Medium",
  },
});

export default DummyScreen;
