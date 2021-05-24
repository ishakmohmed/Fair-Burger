import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import Screen from "../components/Screen";
import HeadingText from "../components/HeadingText";
import Text from "../components/Text";
import AuthContext from "../auth/context";
import { Ionicons } from "@expo/vector-icons";
import orderApi from "../api/order";
import ActivityIndicator2 from "../components/ActivityIndicator2";
import colors from "../config/colors";
import QueueCard from "../components/QueueCard";

function QueueScreen() {
  const { user } = useContext(AuthContext);
  const {
    data: orderData,
    loading: orderLoading,
    request: loadOrders,
  } = useApi(orderApi.getOrders);

  useEffect(() => {
    loadOrdersInitially();
  }, []);

  const handleDelete = async (id) => {
    // await deleteOrder(id); // needa implement this
    await loadOrders(user.id);
  };

  const handlePress = async () => {
    await loadOrders(user.id);
  };

  const loadOrdersInitially = async () => {
    await loadOrders(user.id);
  };

  return (
    <Screen style={styles.container}>
      <HeadingText>Currently Waiting</HeadingText>
      <View style={styles.helpTextAndReloadButton}>
        <Text style={styles.helpText}>Next in queue:</Text>
        <TouchableOpacity onPress={handlePress}>
          <Ionicons name="reload-circle" size={50} color="black" />
        </TouchableOpacity>
      </View>
      <ActivityIndicator2 visible={orderLoading} />
      <FlatList
        data={orderData}
        keyExtractor={(order) => order._id.toString()}
        renderItem={({ item }) => (
          <QueueCard
            customer={item.customer}
            onPress={handleDelete}
            orderId={item._id}
            orderItems={item.orderItems}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  helpText: {
    alignSelf: "center",
    backgroundColor: colors.black,
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

export default QueueScreen;
