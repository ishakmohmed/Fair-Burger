import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import HeadingText from "../components/HeadingText";
import * as Yup from "yup";
import {
  ErrorMessage,
  Form,
  FormField,
  ImageInput,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  price: Yup.number().required().positive().integer().label("Price"),
  image: Yup.string().required().label("Image"),
});

function EditFoodScreen() {
  const handleSubmit = () => {
    console.log("BREAKPOINT.");
  };

  return (
    <Screen style={styles.container}>
      <HeadingText>Edit Food</HeadingText>

      <Form
        initialValues={{
          name: "",
          price: "",
          image: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Please fill the form." visible={true} />
        <FormField
          icon="account"
          name="Customer Name"
          placeholder="John Smith"
        />
        <FormField
          icon="cash"
          keyboardType="numeric"
          name="Price"
          placeholder="0"
        />
        <ImageInput />
        <SubmitButton title="Add Item" />
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
