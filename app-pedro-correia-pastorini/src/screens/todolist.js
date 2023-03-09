import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AddItem, Item } from "../components";
import { TwoChoicesModal } from "../components/modals";
import { COLORS } from "../constants";

export const TodoListScreen = (onPress) => {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItem = () => {
    setItems([...items, { id: Date.now(), value: itemText, state: false }]);
    setItemText("");
  };

  const removeItem = (id) => {
    console.log("ID FROM REMOVE ITEM: ", id);
    setModalVisible(!modalVisible);
    setItems(items.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  const editItemState = (item) => {
    const modifiedItems = items.map((i) =>
      i.id === item.id ? { ...i, state: !item.state } : i
    );
    setItems(modifiedItems);
  };

  const selectItem = (item) => {
    setSelectedItem({ id: item.id, value: item.value, state: item.state });
    setModalVisible(true);
  };

  const modalText =
    selectedItem != null ? (
      selectedItem.state === false ? (
        "CAREFULL, this item is not completedasdfasdfasdfasdf"
      ) : (
        "This action can not be undone"
      )
    ) : (
      <></>
    );
  useEffect(() => {
    console.log("SELECTED ITEM: ---->", selectedItem);
  }, [selectedItem]);

  return (
    <>
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
              <Item
                onPress={() => selectItem(itemData.item)}
                checkboxOnPress={() => editItemState(itemData.item)}
                selected={itemData.item.state}
              >
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
            modalTitle={"Deleting item"}
            modalVisible={modalVisible}
            state={selectedItem && selectedItem.state}
          />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    height: "100%",
    backgroundColor: COLORS.black,
  },
  title: {
    textAlign: "center",
    fontFamily: "I-Bold",
    fontSize: 30,
    fontWeight: 800,
    borderRadius: 5,
    color: COLORS.primary.first,
  },
  checkboxHelp: {
    marginTop: 15,
    color: COLORS.secondary.second,
    textAlign: "left",
    fontFamily: "I-Regular",
  },
});
