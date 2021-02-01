import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      {/* Button element by default has some styling */}
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        title="Go To Image"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go To Counter"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go To Colors"
        onPress={() => navigation.navigate("Color")}
      />
      <Button title="Go To List" onPress={() => navigation.navigate("List")} />
      <Button
        title="Go To Square"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go To Square w Reducer"
        onPress={() => navigation.navigate("Reducer")}
      />
      <Button title="Go To Text" onPress={() => navigation.navigate("Text")} />
      <Button title="Go To Box" onPress={() => navigation.navigate("Box")} />

      {/* <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text> Go To List Demo </Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
