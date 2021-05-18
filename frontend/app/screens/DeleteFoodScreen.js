import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import HeadingText from "../components/HeadingText";
import Food from "../components/Food";
import foodApi from "../api/food";
import ActivityIndicator from "../components/ActivityIndicator";

function DeleteFoodScreen() {
  const { data, error, loading, request: loadFoods } = useApi(foodApi.getFoods);

  useEffect(() => {
    loadFoods();
  }, []);

  const handleDelete = (id) => {
    foodApi.deleteFood(id);
  };

  return (
    <Screen style={styles.container}>
      <HeadingText>Delete Food</HeadingText>
      <ActivityIndicator visible={loading} />
      <FlatList
        data={data}
        keyExtractor={(food) => food.name.toString()}
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
});

export default DeleteFoodScreen;
