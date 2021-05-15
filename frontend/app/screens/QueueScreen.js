import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import HeadingText from "../components/HeadingText";
import Card from "../components/Card";

function QueueScreen() {
  return (
    <Screen style={styles.container}>
      <HeadingText>Currently Waiting</HeadingText>
      <Card title="Mohmed Ishak" subTitle="10 cheeseburgers." />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

export default QueueScreen;
