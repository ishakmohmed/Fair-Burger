import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import {
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import Text from "../components/Text";
import Screen from "../components/Screen";
import HeadingText from "../components/HeadingText";
import colors from "../config/colors";
import foodApi from "../api/food";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  price: Yup.number().required().min(1).max(1000).label("Price"),
});

function AddFoodScreen() {
  const handleSubmit = async (data, { resetForm }) => {
    try {
      await foodApi.addFood(data);
    } catch (error) {
      return alert("Could not add food");
    }

    // Actually, using apisauce, we don't need a try-catch block, and the right way is to check
    // whether the result.ok evaluates to true or not like below, but for whatever reason that
    // I couldn't figure out, it result.ok is always undefined in this case and we need to
    // write try-catch block when calling the API to remove all warnings.

    // if (!result.ok) {
    //   return alert("Could not add food.");
    // }

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <HeadingText>Add Food</HeadingText>
      <View style={styles.formContainer}>
        <Form
          initialValues={{
            name: "",
            price: "",
            images: [],
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
          <SubmitButton title="Add Food" color="orange" />
        </Form>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  formContainer: {
    backgroundColor: colors.white,
  },
  text: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default AddFoodScreen;
