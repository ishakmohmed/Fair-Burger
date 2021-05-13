import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";

function HeadingText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    margin: 20,
    textAlign: "center",
  },
});

export default HeadingText;
