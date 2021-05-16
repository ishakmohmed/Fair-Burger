import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import {
  Form,
  FormField,
  SubmitButton,
  FormImagePicker,
} from "../components/forms";
import Screen from "../components/Screen";
import HeadingText from "../components/HeadingText";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  price: Yup.number().required().min(1).max(1000).label("Price"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const handleSubmit = async (data, { resetForm }) => {
  // something happens

  resetForm();
};

function EditFoodScreen() {
  return (
    <Screen style={styles.container}>
      <HeadingText>Edit Food</HeadingText>
      <Form
        initialValues={{
          name: "",
          price: "",
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          maxLength={255}
          numberOfLines={1}
          name="name"
          placeholder="Name of Food"
        />
        <FormField
          keyboardType="numeric"
          maxLength={6}
          name="price"
          placeholder="Price"
          width={120}
        />
        <FormImagePicker name="images" />
        <SubmitButton title="Add Food" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default EditFoodScreen;
