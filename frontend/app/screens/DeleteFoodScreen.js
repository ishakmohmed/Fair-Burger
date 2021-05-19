import React, { useEffect, useContext } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Screen from "../components/Screen";
import HeadingText from "../components/HeadingText";
import Food from "../components/Food";
import foodApi from "../api/food";
import ActivityIndicator from "../components/ActivityIndicator";
import { Ionicons } from "@expo/vector-icons";
import AuthContext from "../auth/context";

function DeleteFoodScreen() {
  const { user } = useContext(AuthContext);
  const { data, error, loading, request: loadFoods } = useApi(foodApi.getFoods);

  useEffect(() => {
    loadFoods();
  }, []);

  const handleDelete = async (id) => {
    await foodApi.deleteFood(id);
    await loadFoods(user.id);
  };

  const handlePress = async () => {
    await loadFoods(user.id);
  };

  return (
    <Screen style={styles.container}>
      <HeadingText>Delete Food</HeadingText>
      <TouchableOpacity onPress={handlePress}>
        <Ionicons
          style={styles.reloadButton}
          name="reload-circle"
          size={50}
          color="orange"
        />
      </TouchableOpacity>
      <ActivityIndicator visible={loading} />
      <FlatList
        data={data}
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
  },
  reloadButton: {
    margin: 10,
    marginLeft: "auto",
  },
});

export default DeleteFoodScreen;
