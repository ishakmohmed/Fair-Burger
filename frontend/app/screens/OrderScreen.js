import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { Form, FormField, SubmitButton } from "../components/forms";
import Text from "../components/Text";
import Screen from "../components/Screen";
import HeadingText from "../components/HeadingText";
import colors from "../config/colors";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  customer: Yup.string().required().min(1).label("Name"),
  orderItems: Yup.array().min(1),
});

function OrderScreen() {
  const { user } = useContext(AuthContext);

  const handleSubmit = () => {};

  return (
    <Screen style={styles.container}>
      <HeadingText>Add Order</HeadingText>
      <Form
        initialValues={{
          customer: "",
          orderItems: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Text style={styles.text}>Food Name</Text>
        <FormField
          maxLength={255}
          numberOfLines={1}
          name="name"
          placeholder="Food"
        />
        <Text style={styles.text}>Price</Text>
        <FormField
          keyboardType="numeric"
          maxLength={6}
          name="price"
          placeholder="0"
          width={120}
        />
        <SubmitButton title="Add Order" color="purple" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default OrderScreen;
