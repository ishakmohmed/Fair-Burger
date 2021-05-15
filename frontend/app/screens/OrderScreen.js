import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import HeadingText from "../components/HeadingText";

function OrderScreen() {
  return (
    <Screen style={styles.container}>
      <HeadingText>Add Order</HeadingText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default OrderScreen;
