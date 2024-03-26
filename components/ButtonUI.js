import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function ButtonUI(props) {
  const { onPress, title, btnStyle, textStyle } = props;
  return (
    <Pressable style={[styles.button, btnStyle]} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: "#ddd",
    minHeight: 40,
  },
});
