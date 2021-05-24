import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import colors from "../config/colors";

function QueueCard(customer, onPress, orderId, orderItems) {
  return (
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <Text style={styles.customerName}>{customer}</Text>
      </View>
      <View style={styles.rightContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.darkGreen,
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 10,
    overflow: "hidden",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
  },
  customerName: {
    color: colors.white,
    fontSize: 22,
    fontWeight: "bold",
    margin: 5,
  },
  leftContainer: {},
  rightContainer: {},
});

export default QueueCard;
