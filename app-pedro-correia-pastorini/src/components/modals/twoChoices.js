import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

export const TwoChoicesModal = ({
  modalText,
  modalTitle,
  cancelTitle,
  continueTitle,
  cancelAction,
  continueAction,
  modalVisible,
}) => { 
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>{modalTitle}</Text>
          <Text style={styles.warningText}>{modalText}</Text>
          <View style={styles.pressableContainer}>
            <Pressable
              style={styles.cancelPressable}
              onPress={() => cancelAction()}
            >
              <Text style={styles.pressableText}>{cancelTitle}</Text>
            </Pressable>
            <Pressable
              style={styles.continuePressable}
              onPress={() => continueAction()}
            >
              <Text style={styles.pressableText}>{continueTitle}</Text>
            </Pressable>
          </View>
        </View>
      </View>
      
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignSelf: "center",
    backgroundColor: COLORS.secondary.first,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 800,
    borderRadius: 5,
    color: COLORS.primary.fourth,
  },
  warningText: {
    textAlign: "center",
    paddingTop: 10,
    color: COLORS.secondary.fourth,
  },
  pressableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  cancelPressable: {
    alignItems: "center",
    backgroundColor: COLORS.secondary.third,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  continuePressable: {
    backgroundColor: COLORS.secondary.fifth,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 20,
  },
  pressableText: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: COLORS.primary.first,
    fontWeight: 800,
  },
});
