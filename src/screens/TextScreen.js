import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      {/* by default TextInput has 0 styling applied to it. */}
      {/* in ios by default text input is capitalized */}
      {/* autoCapitalize is not boolean because it has more options */}
      <Text>Enter Password</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      {name && name.length < 5 ? (
        <Text> enter longer than 5 chars</Text>
      ) : (
        <Text>My name is:{name}</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
