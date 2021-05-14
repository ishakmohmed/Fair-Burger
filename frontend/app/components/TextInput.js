import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import colors from "../config/colors";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 10,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    width: "90%",
    elevation: 5,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    ...defaultStyles.text,
    width: "100%",
  },
});

export default AppTextInput;
