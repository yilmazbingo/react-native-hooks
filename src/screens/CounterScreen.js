import React, { useReducer } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increase":
      return { ...state, counter: state.counter + action.payload };
    case "Decrease":
      return { ...state, counter: state.counter + action.payload };
  }
};
// by default react does not magically watch a variable."Let counter=0" There is no automatic detection of some variable changing inside of our components
const Counter = () => {
  // setCounter will rerender this component, and our initial value will be counter+1
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "Increase", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "Decrease", payload: -1 });
        }}
      />

      <Text>Current Count:{state.counter}</Text>
    </View>
  );
};

const style = StyleSheet.create({});
export default Counter;
