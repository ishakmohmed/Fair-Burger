import React, { useState } from "react";
import { View, StyleSheet, Dimensions, useColorScheme } from "react-native";
import Tab from "./Tab";
import colors from "../config/colors";

const { width } = Dimensions.get("screen");

function TabBar({ state, navigation }) {
  const [selected, setSelected] = useState("queue");
  const { routes } = state;
  const renderColor = (currentTab) =>
    currentTab === selected ? colors.pink : colors.white;

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
    elevation: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.darkBlue,
    width: "90%",
    height: 80,
    borderRadius: 20,
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    width,
  },
});

export default TabBar;
