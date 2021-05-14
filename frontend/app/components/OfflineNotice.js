import React from "react";
import {
  View as SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import Text from "./Text";
import colors from "../config/colors";

function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </SafeAreaView>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.red,
    height: 100,
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
