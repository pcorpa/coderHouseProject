import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { AddItem, Item } from "../components";
import { TwoChoicesModal } from "../components/modals";
import { COLORS } from "../constants";

export const TodoListScreen = () => {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItem = () => {
    setItems([...items, { id: Date.now(), value: itemText }]);
    setItemText("");
  };

  const removeItem = (id) => {
    setModalVisible(!modalVisible);
    setItems(items.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <SafeAreaView />
        <Text style={styles.title}>To do list:</Text>
        <AddItem
          onChangeText={onChangeText}
          onPress={() =>
            itemText
              ? addItem()
              : alert(
                  "To do lists with empty items are not usefull. You must type something."
                )
          }
          placeholder={"Agrega un nuevo item"}
          value={itemText}
        >
          Agregar
        </AddItem>
        {items.length > 0 ? (
          <Text style={styles.checkboxHelp}>Done?</Text>
        ) : (
          <></>
        )}

        <FlatList
          data={items}
          renderItem={(itemData) => (
            <Item onPress={() => selectItem(itemData.item)}>
              {itemData.item.value}
            </Item>
          )}
          keyExtractor={(item) => item.id.toString()}
        />

        <TwoChoicesModal
          cancelAction={() => {
            setModalVisible(false);
            setSelectedItem(null);
          }}
          cancelTitle={"Cancel"}
          continueAction={() => removeItem(selectedItem.id)}
          continueTitle={"Delete"}
          modalTitle="Deleting item..."
          modalText="This action can not be undone"
          modalVisible={modalVisible}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    height: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 800,
    borderRadius: 5,
    color: COLORS.primary.fourth,
  },
  checkboxHelp: {
    marginTop: 15,
    color: COLORS.secondary.fifth,
    textAlign: "left",
  },
});
