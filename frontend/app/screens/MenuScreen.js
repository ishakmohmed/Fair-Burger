import React, { useEffect, useContext } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import HeadingText from "../components/HeadingText";
import Text from "../components/Text";
import Food from "../components/Food";
import foodApi from "../api/food";
import ActivityIndicator2 from "../components/ActivityIndicator2";
import AuthContext from "../auth/context";
import colors from "../config/colors";

function MenuScreen() {
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
      <HeadingText>Menu</HeadingText>
      <View style={styles.helpTextAndReloadButton}>
        <Text style={styles.helpText}>This is your menu</Text>
        <TouchableOpacity onPress={handlePress}>
          <Ionicons name="reload-circle" size={50} color="black" />
        </TouchableOpacity>
      </View>
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
    paddingBottom: 60,
  },
  helpText: {
    alignSelf: "center",
    backgroundColor: colors.green,
    borderRadius: 20,
    color: colors.white,
    fontWeight: "bold",
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  helpTextAndReloadButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
});

export default MenuScreen;
