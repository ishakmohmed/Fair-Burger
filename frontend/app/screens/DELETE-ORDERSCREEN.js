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
import useApi from "../hooks/useApi";
import { Ionicons } from "@expo/vector-icons";

const validationSchema = Yup.object().shape({
  customer: Yup.string().required().min(1).label("Name"),
});

function OrderScreen() {
  const [orderItems, setOrderItems] = useState([]);
  const { user } = useContext(AuthContext);
  const {
    data: addOrderData,
    loading: addOrderLoading,
    request: addOrderRequest,
  } = useApi(orderApi.addOrder);
  const {
    data: foodData,
    loading: foodLoading,
    request: loadFoods,
  } = useApi(foodApi.getFoods);

  useEffect(() => {
    loadFoodsInitially();
  }, []);

  // {
  //     "userId": "60a69f22af1fb12724ad5293",
  //     "customer": "bismillah",
  //     "orderItems": [{
  //         "name": "60a69f22af1fb12724ad5293",
  //         "qty": 5,
  //         "price": 19
  //         }]
  // }

  const handleSubmit = async (data, { resetForm }) => {
    resetForm();
  };

  const handlePressReloadButton = async () => {
    await loadFoods(user.id);
  };

  const handlePressCrossButton = async () => {
    setOrderItems([]);
    console.log("WELL Now your order is >>>", orderItems);
  };

  const handlePressAddButton = (foodId, foodPrice, qty) => {
    const newOrder = {
      foodId,
      foodPrice,
      qty,
    };

    setOrderItems([...orderItems, newOrder]);
    console.log("Now your order is >>>", orderItems);
  };

  const loadFoodsInitially = async () => {
    await loadFoods(user.id);
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
      <ActivityIndicator2 visible={foodLoading || addOrderLoading} />
      <Form
        initialValues={{
          customer: "",
        }}
        onSubmit={handleSubmit}
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
    backgroundColor: colors.black,
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
