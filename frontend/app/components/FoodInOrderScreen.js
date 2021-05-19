import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "./Text";
import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";

function FoodInOrderScreen({ foodName, foodPrice }) {
  const [qty, setQty] = useState(1000); // maybe remove this

  return (
    <View style={styles.container}>
      <Text style={styles.foodName} numberOfLines={1}>
        {foodName}
      </Text>
      <Text style={styles.foodPrice} numberOfLines={1}>
        MYR {foodPrice}
      </Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity>
          <AntDesign
            name="pluscircleo"
            size={30}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.quantity} numberOfLines={1}>
          {qty}
        </Text>
        <TouchableOpacity>
          <AntDesign
            name="minuscircleo"
            size={30}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>Add</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.pink,
    borderRadius: 20,
    marginTop: 10,
    padding: 5,
  },
  container: {
    backgroundColor: colors.black,
    borderRadius: 10,
    margin: 10,
    marginBottom: 0,
    padding: 10,
    width: 160,
    height: 160,
  },
  foodName: {
    color: colors.white,
    fontWeight: "bold",
  },
  foodPrice: {
    color: colors.pink,
    fontSize: 14,
  },
  icon: {
    margin: 5,
  },
  text: {
    alignSelf: "center",
    color: colors.white,
    fontWeight: "bold",
  },
  quantity: {
    color: colors.white,
    fontSize: 20,
  },
  quantityContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
    width: "100%",
  },
});

export default FoodInOrderScreen;
