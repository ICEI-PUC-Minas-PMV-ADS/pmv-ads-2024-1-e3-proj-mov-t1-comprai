import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  return (
    <TextInput
      style={styles.input}
      {...props}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    width: "100%",
    marginBottom: 25,
  },
});

export default Input;
