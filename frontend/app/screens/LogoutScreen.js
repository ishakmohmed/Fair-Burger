import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import HeadingText from "../components/HeadingText";
import Button from "../components/Button";
import AuthContext from "../auth/context";

function LogoutScreen() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <Screen>
      <View style={styles.container}>
        <HeadingText>Logout?</HeadingText>
        <Button color="purple" title="Logout!" onPress={() => setUser(null)} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default LogoutScreen;
