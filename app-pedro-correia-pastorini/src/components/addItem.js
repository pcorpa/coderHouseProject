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
        placeholderTextColor={COLORS.secondary.second}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
      />
      <Pressable style={styles.pressable} onPress={onPress}>
        <Text style={styles.pressableText}>{title}</Text>
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
    width: "70%",
    borderBottomColor: COLORS.secondary.third,
    borderBottomWidth: 1,
    color: COLORS.primary.fifth,
  },
  pressable: {
    width: "10%",
    paddingVertical: 5,
    marginLeft: 20,
    flex: 1,
    backgroundColor: COLORS.secondary.third,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  pressableText: {
    fontWeight: 900,
    textAlign: "center",
    color: "white",
  },
});
