import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>this is the compoents screen!</Text>
      <Text>HI there</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});
