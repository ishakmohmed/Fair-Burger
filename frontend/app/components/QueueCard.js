import { View, StyleSheet } from "react-native";

function QueueCard(customer, orderItems, orderId) {
  return (
    <View style={styles.card}>
      <View style={styles.leftContainer}></View>
      <View style={styles.rightContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.darkGreen,
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 10,
    overflow: "hidden",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
  },
  leftContainer: {},
  rightContainer: {},
});

export default QueueCard;
