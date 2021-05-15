import React, { useState } from "react";
import Screen from "../components/Screen";
import HeadingText from "../components/HeadingText";

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required().label("Name"),
//   price: Yup.number().required().positive().integer().label("Price"),
//   image: Yup.string().required().label("Image"),
// });

function EditFoodScreen() {
  const [dataSentSuccessfully, setdataSentSuccessfully] = useState(false);

  return (
    <Screen>
      <HeadingText>Edit Food</HeadingText>
      {/* 
      <Form
        initialValues={{
          name: "",
          price: "",
          image: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Please fill the form." visible={dataSent} />
        <FormField
          icon="account"
          name="Customer Name"
          placeholder="John Smith"
        />
        <FormField icon="cash" name="Price" placeholder="0" />
        <SubmitButton title="Add Burger" />
      </Form> */}
    </Screen>
  );
}

export default EditFoodScreen;
