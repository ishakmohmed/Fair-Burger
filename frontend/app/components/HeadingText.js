import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";

function HeadingText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: colors.strongPink,
    color: colors.white,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    marginBottom: 20,
    textAlign: "center",
    padding: 20,
  },
});

export default HeadingText;
