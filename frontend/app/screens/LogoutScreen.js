import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import HeadingText from "../components/HeadingText";
import Button from "../components/Button";
import DancingBurger from "../components/DancingBurger";
import AuthContext from "../auth/context";

function LogoutScreen() {
  const { setUser } = useContext(AuthContext);

  return (
    <Screen>
      <View style={styles.container}>
        <HeadingText>Logout?</HeadingText>
        <DancingBurger />
        <Button color="green" title="Logout!" onPress={() => setUser(null)} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default LogoutScreen;
