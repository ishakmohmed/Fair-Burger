import React, { useContext } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";
import { Form, FormField, SubmitButton } from "../components/forms";
import Text from "../components/Text";
import Screen from "../components/Screen";
import HeadingText from "../components/HeadingText";
import colors from "../config/colors";
import AuthContext from "../auth/context";
import { Ionicons } from "@expo/vector-icons";
import FoodInOrderScreen from "../components/FoodInOrderScreen";

const validationSchema = Yup.object().shape({
  customer: Yup.string().required().min(1).label("Name"),
  orderItems: Yup.array().min(1),
});

function OrderScreen() {
  const { user } = useContext(AuthContext);

  const handleSubmit = () => {};

  const handlePress = () => {};

  return (
    <Screen style={styles.container}>
      <HeadingText>Add Order</HeadingText>
      <TouchableOpacity onPress={handlePress}>
        <Ionicons
          style={styles.resetButton}
          name="close-circle"
          size={50}
          color="black"
        />
      </TouchableOpacity>
      <Form
        initialValues={{
          customer: "",
          orderItems: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Text style={styles.text}>Customer Name</Text>
        <FormField
          maxLength={255}
          numberOfLines={1}
          name="name"
          placeholder="Name"
        />
        <View>
          <ScrollView horizontal>
            <FoodInOrderScreen
              foodName="some burger"
              foodPrice={44}
              name="orderItems"
            />
            <FoodInOrderScreen
              foodName="some burger"
              foodPrice={44}
              name="orderItems"
            />
            <FoodInOrderScreen
              foodName="some burger"
              foodPrice={44}
              name="orderItems"
            />
            <FoodInOrderScreen
              foodName="some burger"
              foodPrice={44}
              name="orderItems"
            />
            <FoodInOrderScreen
              foodName="some burger"
              foodPrice={44}
              name="orderItems"
            />
            <FoodInOrderScreen
              foodName="some burger"
              foodPrice={44}
              name="orderItems"
            />
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
  resetButton: {
    marginBottom: 15,
    marginLeft: "auto",
    marginRight: "auto",
  },
  scrollViewContainer: {
    flex: 1,
  },
  text: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default OrderScreen;
