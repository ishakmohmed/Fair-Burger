import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        blurRadius={2}
        style={styles.background}
        source={require("../assets/icon.png")}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/icon.png")} />
          <Text style={styles.tagline}>CHANGE THIS PAGE'S CODES!</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            color="green"
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
          <Button
            title="Register"
            color="darkGreen"
            onPress={() => navigation.navigate(routes.REGISTER)}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
