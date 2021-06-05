import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Text from "./Text";
import colors from "../config/colors";

function QueueCard({ data, onPress }) {
  const { customer, _id, orderItems } = data;

  const cardData = orderItems.map((item) => `(qty: ${item.qty}) ${item.name}`);

  const arrayOfFoodsWithQuantities = [];

  for (let item of orderItems) {
    arrayOfFoodsWithQuantities.push(item.price * item.qty);
  }

  const total = arrayOfFoodsWithQuantities.reduce((accumulator, value) => {
    return accumulator + value;
  });

  return (
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <Text style={styles.customerName} numberOfLines={1}>
          {customer}
        </Text>
        {cardData.map((data, index) => (
          <Text style={styles.orderText} key={index} numberOfLines={1}>
            {data}
          </Text>
        ))}
        <Text style={styles.totalPrice}>TOTAL: RM {total}</Text>
      </View>
      <TouchableOpacity onPress={() => onPress(_id)}>
        <Ionicons
          name="trash-outline"
          size={25}
          color="white"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: colors.darkGreen,
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 10,
    minHeight: 100,
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
  icon: {
    margin: 20,
  },
  leftContainer: {
    flex: 1,
  },
  orderText: {
    color: colors.white,
    fontSize: 16,
    margin: 5,
  },
  totalPrice: {
    color: colors.green,
    fontSize: 16,
    margin: 5,
  },
});

export default QueueCard;
