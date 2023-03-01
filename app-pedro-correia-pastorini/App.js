import React, { useState } from "react";


import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import { AddItem } from "./components";

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItem = () => {
    setItems([...items, { id: Date.now(), value: itemText }]);
    setItemText("");
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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
    <View style={styles.screen}>
      <AddItem 
      onChangeText={onChangeText}
      onPress={addItem}
      placeholder={"Agrega un nuevo item"}
      value={itemText}
      >Agregar</AddItem>
      <FlatList
        data={items}
        renderItem={(itemData) => (
          <Pressable
            style={styles.contentList}
            onPress={() => {
              selectItem(itemData.item);
            }}
          >
            <Text style={styles.item}>{itemData.item.value}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View styles={styles.modalTitle}>
            <Text style={styles.contentList.modalTitle}>Eliminar Item</Text>
          </View>
          <View styles={styles.modalContent}>
            <Text>
              ¿Está seguro que desea eliminar el item {selectedItem?.value}?
            </Text>
          </View>
          <View styles={styles.modalActions}>
            <Button
              title="Cancelar"
              onPress={() => {
                setModalVisible(false);
                setSelectedItem(null);
              }}
            />
            <Button
              title="Eliminar"
              onPress={() => {
                removeItem(selectedItem.id);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  itemContainer: {
    marginTop: 30,
    flex: 1,
  },
  item: {
    padding: 10,
    textAlign: "center",
  },
  contentList: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#94a3b8",
    marginTop: 10,
  },
  modalContainer: {
    height: 400,
    width: 300,
    marginTop: 100,
    alignSelf: "center",
    backgroundColor: "#64748b",
    borderRadius: 10,
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    borderRadius: 5,
  },
  modalContent: {
    top: 20,
    padding: 10,
    width: "50%",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
