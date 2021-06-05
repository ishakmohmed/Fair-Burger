import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

import colors from "../config/colors";

function DancingBurger() {
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/dancingBurger.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: colors.white,
    height: "50%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
});

export default DancingBurger;
