import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import HeadingText from "../components/HeadingText";

function QueueScreen() {
  return (
    <Screen style={styles.container}>
      <HeadingText>Currently Waiting</HeadingText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export default QueueScreen;
