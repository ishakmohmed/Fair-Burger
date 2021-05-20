import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function ActivityIndicator2({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <LottieView
          autoPlay
          loop
          source={require("../assets/animations/loader.json")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  overlay: {
    backgroundColor: "white",
    height: "50%",
    opacity: 1,
    width: "100%",
    zIndex: 1,
  },
});

export default ActivityIndicator2;
