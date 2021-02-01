import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle}></View>
      <View style={styles.textTwoStyle}></View>
      <View style={styles.textThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textOneStyle: {
    borderWidth: 3,
    backgroundColor: "blue",
    width: 50,
    height: 50,
  },
  textTwoStyle: {
    backgroundColor: "red",
    borderWidth: 3,
    borderColor: "red",
    // position: "absolute",
    width: 50,
    height: 50,
    // top: 50,
    alignSelf: "flex-end",
    right: 0,
    bottom: 0,
    // left: 50,
    // ...StyleSheet.absoluteFillObject,
  },
  textThreeStyle: {
    borderWidth: 3,
    backgroundColor: "green",

    borderColor: "red",
    width: 50,
    height: 50,
  },
});

export default BoxScreen;
