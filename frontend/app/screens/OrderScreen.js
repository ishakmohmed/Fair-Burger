import React, { useContext, useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";
import { Form, FormField, SubmitButton } from "../components/forms";
import Text from "../components/Text";
import Screen from "../components/Screen";
import HeadingText from "../components/HeadingText";
import colors from "../config/colors";
import ActivityIndicator2 from "../components/ActivityIndicator2";
import orderApi from "../api/order";
import foodApi from "../api/food";
import AuthContext from "../auth/context";
import FoodInOrderScreen from "../components/FoodInOrderScreen";
import { Ionicons } from "@expo/vector-icons";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
  customer: Yup.string().required().min(1).label("Name"),
});

function OrderScreen() {
  const { user } = useContext(AuthContext);

  let orderData = {};
  let orderItems = [];

  const {
    data: foodData,
    loading: foodLoading,
    request: loadFoods,
  } = useApi(foodApi.getFoods);

  useEffect(() => {
    loadFoodsInitially();
  }, []);

  const loadFoodsInitially = async () => {
    await loadFoods(user.id);
  };

  const handlePressReloadButton = async () => {
    await loadFoods(user.id);
  };

  const handlePressCrossButton = () => {};

  const handlePressAddButton = (foodName, changeableQuantity, foodPrice) => {
    orderItems.push({
      name: foodName,
      qty: changeableQuantity,
      price: foodPrice,
    });

    orderData = {
      ...orderData,
      userId: user.id,
      orderItems: orderItems,
    };
  };

  const handleDataRepackaging = async (data, { resetForm }) => {
    const { customer } = data;
    orderData = { ...orderData, customer };

    handleSubmit();
    resetForm();
  };

  const handleSubmit = async () => {
    await orderApi.addOrder(orderData);
  };

  return (
    <Screen style={styles.container}>
      <HeadingText>Add Order</HeadingText>
      <View style={styles.helpTextAndReloadButton}>
        <Text style={styles.helpText}>Items from your menu</Text>
        <TouchableOpacity onPress={handlePressCrossButton}>
          <Ionicons name="md-close-circle" size={50} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePressReloadButton}>
          <Ionicons name="reload-circle" size={50} color="black" />
        </TouchableOpacity>
      </View>
      {/* <ActivityIndicator2 visible={loading} /> */}
      <Form
        initialValues={{
          customer: "",
        }}
        onSubmit={handleDataRepackaging}
        validationSchema={validationSchema}
      >
        <Text style={styles.text}>Customer Name</Text>
        <FormField
          maxLength={255}
          numberOfLines={1}
          name="customer"
          placeholder="Name"
        />
        <Text style={styles.text}>Order Items</Text>
        <View>
          <ScrollView horizontal style={styles.scrollView}>
            {foodData.map((food) => (
              <FoodInOrderScreen
                addButtonVisible={true}
                key={food._id}
                foodId={food._id}
                foodName={food.name}
                foodPrice={food.price}
                onPress={handlePressAddButton}
              />
            ))}
          </ScrollView>
        </View>
        <SubmitButton title="Add Order" color="green" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  helpText: {
    alignSelf: "center",
    backgroundColor: colors.green,
    borderRadius: 20,
    color: colors.white,
    fontWeight: "bold",
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  helpTextAndReloadButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  scrollView: {
    backgroundColor: colors.light,
    marginVertical: 5,
    height: 200,
    minHeight: 200,
    borderRadius: 10,
  },
  text: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default OrderScreen;
