import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddThread({ submitHandler }) {
  [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Thread..."
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        color="#35374B"
        onPress={() => submitHandler(text)}
        title="Add Thread"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
