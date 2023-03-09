import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

export const TwoChoicesModal = ({
  modalTitle,
  cancelTitle,
  continueTitle,
  cancelAction,
  continueAction,
  modalVisible,
  state,
}) => {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      alignSelf: "center",
      backgroundColor: state ? COLORS.secondary.first : COLORS.warnings.third,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    title: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: 800,
      borderRadius: 5,
      color: state ? COLORS.secondary.fourth : COLORS.warnings.first,
      fontFamily: "I-Bold",
    },
    warningText: {
      maxWidth: "50%",
      textAlign: "center",
      alignSelf: "center",
      fontSize: state ? 12 : 16,
      paddingTop: 10,
      color: state ? COLORS.secondary.fourth : COLORS.warnings.first,
      fontFamily: state ? "I-Regular" : "I-Bold",
    },
    pressableContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      paddingTop: 20,
    },
    cancelPressable: {
      alignItems: "center",
      backgroundColor: state ? COLORS.secondary.fourth : COLORS.warnings.first,
      borderRadius: 10,
      marginHorizontal: 20,
    },
    continuePressable: {
      backgroundColor: state ? COLORS.secondary.fourth : COLORS.warnings.first,
      borderRadius: 10,
      alignItems: "center",
      marginHorizontal: 20,
    },
    cancelPressableText: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      color: state ? COLORS.secondary.first : COLORS.warnings.third,
      fontFamily: "I-Bold",
    },
    continuePressableText: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      color: state ? COLORS.secondary.second : COLORS.warnings.third,
      fontFamily: "I-Bold",
    },
  });
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>{modalTitle}</Text>
          <Text style={styles.warningText}>
            {state
              ? "This action can not be undone"
              : "CAREFULL, this item is not completed"}
          </Text>

          <View style={styles.pressableContainer}>
            <Pressable
              style={styles.cancelPressable}
              onPress={() => cancelAction()}
            >
              <Text style={styles.cancelPressableText}>{cancelTitle}</Text>
            </Pressable>
            <Pressable
              style={styles.continuePressable}
              onPress={() => continueAction()}
            >
              <Text style={styles.continuePressableText}>{continueTitle}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};
