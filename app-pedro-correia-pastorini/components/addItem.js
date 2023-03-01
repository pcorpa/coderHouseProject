import { TextInput, Text, Pressable, View, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants";

export const AddItem = ({
  onChangeText,
  value,
  placeholder,
  onPress,
  children: title,
  style,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
      />
      <Pressable style={styles.pressable} onPress={onPress}>
        <Text style={(styles.pressableText, style)}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  pressable: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: COLORS.third,
    borderRadius: 15,
  },
  pressableText: {},
});
