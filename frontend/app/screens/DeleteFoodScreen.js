import React, { useEffect, useContext } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Screen from "../components/Screen";
import HeadingText from "../components/HeadingText";
import Text from "../components/Text";
import Food from "../components/Food";
import foodApi from "../api/food";
import ActivityIndicator2 from "../components/ActivityIndicator2";
import { Ionicons } from "@expo/vector-icons";
import AuthContext from "../auth/context";
import colors from "../config/colors";

function DeleteFoodScreen() {
  const { user } = useContext(AuthContext);
  const {
    data: foodData,
    loading: foodLoading,
    request: loadFoods,
  } = useApi(foodApi.getFoods);
  const { loading: foodDeleteLoading, request: deleteFood } = useApi(
    foodApi.deleteFood
  );

  useEffect(() => {
    loadFoodsInitially();
  }, []);

  const handleDelete = async (id) => {
    await deleteFood(id);
    await loadFoods(user.id);
  };

  const handlePress = async () => {
    await loadFoods(user.id);
  };

  const loadFoodsInitially = async () => {
    await loadFoods(user.id);
  };

  return (
    <Screen style={styles.container}>
      <HeadingText>Delete Food</HeadingText>
      <Text style={styles.helpText}>This is your menu</Text>
      <TouchableOpacity onPress={handlePress}>
        <Ionicons
          style={styles.reloadButton}
          name="reload-circle"
          size={50}
          color="black"
        />
      </TouchableOpacity>
      <ActivityIndicator2 visible={foodLoading || foodDeleteLoading} />
      <FlatList
        data={foodData}
        keyExtractor={(food) => food._id.toString()}
        renderItem={({ item }) => (
          <Food
            foodId={item._id}
            foodName={item.name}
            foodPrice={item.price}
            onPress={handleDelete}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 50,
  },
  helpText: {
    alignSelf: "center",
    borderColor: colors.green,
    borderRadius: 20,
    borderWidth: 2,
    color: colors.green,
    fontWeight: "bold",
    margin: 10,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  reloadButton: {
    marginBottom: 15,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default DeleteFoodScreen;
