import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function Card({ title, subTitle }) {
  return (
    <View style={styles.card}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/burger.jpg")}
      >
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={2}>
            Customer: {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={100}>
            {subTitle}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
    width: "95%",
  },
  detailsContainer: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 20,
    minHeight: 150,
  },
  image: {
    minHeight: 150,
    width: "100%",
  },
  subTitle: {
    color: colors.white,
  },
  title: {
    backgroundColor: colors.orange,
    borderRadius: 10,
    color: colors.white,
    fontWeight: "bold",
    marginBottom: 7,
    padding: 5,
  },
});

export default Card;
