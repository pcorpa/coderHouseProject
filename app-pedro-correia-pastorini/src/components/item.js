import { Text, StyleSheet, Pressable, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants";

export const Item = ({ onPress, children: title }) => {
  const [selected, setSelected] = useState(false);
  const pressableCheckStyleHandeling = selected
    ? styles.pressableCheckSelected
    : styles.pressableCheck;

  const itemStyleHandeling = selected
    ? styles.pressableItemSelected
    : styles.pressableItem;
  const itemTextStyleHandeling = selected
    ? styles.pressableTextSelected
    : styles.pressableText;
  return (
    <View style={styles.container}>
      <Pressable
        style={pressableCheckStyleHandeling}
        onPress={() => setSelected(!selected)}
      />
      <Pressable style={itemStyleHandeling} onPress={onPress}>
        <Text style={itemTextStyleHandeling}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  pressableCheck: {
    left: 7,
    height: "9%",
    width: 25,
    aspectRatio: 1,
    borderWidth: 1,
    borderRadius: "100%",
    borderColor: COLORS.secondary.third,
    marginTop: 10,
  },
  pressableCheckSelected: {
    left: 7,
    width: 25,
    height: 25,
    borderRadius: "100%",
    backgroundColor: COLORS.secondary.third,
    marginTop: 10,
  },
  pressableItem: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    width: "85%",
    borderRadius: 15,
    backgroundColor: COLORS.secondary.first,
    marginTop: 10,
    marginLeft: 20,
  },
  pressableItemSelected: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    width: "85%",
    borderRadius: 15,
    backgroundColor: COLORS.secondary.third,
    marginTop: 10,
    marginLeft: 20,
  },
  pressableText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: "left",
    fontWeight: 600,
    color: COLORS.secondary.fourth,
  },
  pressableTextSelected: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: "left",
    fontWeight: 600,
    color: COLORS.secondary.first,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});
