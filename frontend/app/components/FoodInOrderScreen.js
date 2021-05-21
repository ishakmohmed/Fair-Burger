import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "./Text";
import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";

function FoodInOrderScreen({ foodId, foodName, foodPrice, onPress, qty }) {
  const [changeableQuantity, setChangeableQuantity] = useState(qty);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.foodName} numberOfLines={1}>
          {foodName}
        </Text>
        <Text style={styles.foodPrice} numberOfLines={1}>
          MYR {foodPrice}
        </Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity>
          <AntDesign
            name="leftcircle"
            size={30}
            color="white"
            onPress={() => {
              if (changeableQuantity > 0)
                setChangeableQuantity(changeableQuantity - 1);
            }}
          />
        </TouchableOpacity>
        <Text style={styles.quantity} numberOfLines={1}>
          qty: {changeableQuantity}
        </Text>
        <TouchableOpacity>
          <AntDesign
            name="rightcircle"
            size={30}
            color="white"
            onPress={() => {
              setChangeableQuantity(changeableQuantity + 1);
            }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPress(foodId, foodPrice, changeableQuantity)}
      >
        <View>
          <Text style={styles.text}>Add</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.light,
    borderRadius: 10,
    padding: 5,
  },
  container: {
    backgroundColor: colors.darkGreen,
    borderRadius: 10,
    justifyContent: "space-around",
    margin: 10,
    padding: 10,
    width: 180,
    height: 180,
  },
  foodName: {
    color: colors.white,
    fontWeight: "bold",
  },
  foodPrice: {
    color: colors.green,
    fontSize: 14,
  },
  icon: {
    margin: 5,
  },
  text: {
    alignSelf: "center",
    color: colors.black,
    fontWeight: "bold",
  },
  quantity: {
    color: colors.white,
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
