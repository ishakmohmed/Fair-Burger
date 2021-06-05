import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import Tab from "./Tab";
import colors from "../config/colors";

const { width } = Dimensions.get("screen");

function TabBar({ navigation, state }) {
  const [selected, setSelected] = useState("queue");
  const { routes } = state;
  const renderColor = (currentTab) =>
    currentTab === selected ? colors.green : colors.white;

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGreen,
    borderRadius: 25,
    flexDirection: "row",
    height: 80,
    justifyContent: "space-between",
    width: "95%",
  },
  wrapper: {
    alignItems: "center",
    bottom: 20,
    justifyContent: "center",
    position: "absolute",
    width,
  },
});

export default TabBar;
