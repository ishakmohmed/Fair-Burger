import React, { useContext, useState } from "react";
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
});

function OrderScreen() {
  const [orderItems, setOrderItems] = useState([]);
  const { user } = useContext(AuthContext);


  // test out the API using this data >>>

//   {
//     "userId": "609dd8aa4f538c29c02bf456",
//     "customer": "Mohmed Ishak",
//     "orderItems": [ {
//         "name": "60a528d84a379c3708d8cd37",
//         "qty": 2,
//         "price": 5
//     }
//     ]
// }

  const handleSubmit = () => {};

  const handlePressAddButton = () => {};

  return (
    <Screen style={styles.container}>
      <HeadingText>Add Order</HeadingText>
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
          name="name"
          placeholder="Name"
        />
        <Text style={styles.text}>Order Items</Text>
        <View>
          <ScrollView
            horizontal
            style={{
              backgroundColor: colors.light,
              padding: 5,
              borderRadius: 10,
            }}
          >
            <FoodInOrderScreen
              foodId="fakeId"
              foodName="some burger"
              foodPrice={44}
              onPressAddButton={handlePressAddButton}
              qty={2}
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
