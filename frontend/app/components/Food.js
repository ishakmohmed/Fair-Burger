import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import Text from "./Text";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";

function Food({ foodId, foodName, foodPrice, onPress }) {
  return (
    <View style={styles.card}>
      <View style={styles.nameAndPriceContainer}>
        <Text style={styles.foodName} numberOfLines={1}>
          {foodName}
        </Text>
        <Text style={styles.foodPrice} numberOfLines={1}>
          MYR {foodPrice}
        </Text>
      </View>
      <TouchableOpacity onPress={() => onPress(foodId)}>
        <Ionicons
          name="trash-outline"
          size={30}
          color="white"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.black,
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 20,
    overflow: "hidden",
    padding: 10,
    width: "100%",
  },
  foodName: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "bold",
    margin: 5,
  },
  foodPrice: {
    color: colors.white,
    fontSize: 20,
    margin: 5,
  },
  icon: {
    margin: 20,
  },
  nameAndPriceContainer: {
    flex: 1,
  },
});

export default Food;
