import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppFont from "../config/AppFont";
import AppText from "./AppText";
import AppPickerItem from "./AppPickerItem";

//Handles a template for Modal based Picker
function AppPicker({ data, icon, placeholder, selectedItem, onItemSelect }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && <MaterialCommunityIcons name={icon} size={24} />}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons name="chevron-down" size={24} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="fade">
        <FlatList
          data={data}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <AppPickerItem
              onPress={() => {
                setModalVisible(false);
                onItemSelect(item);
              }}
              label={item.label}
              icon={item.icon}
            />
          )}
        />
        <Button title="close" onPress={() => setModalVisible(false)} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCDCDC",
    flexDirection: "row",
    borderRadius: 30,
    padding: 10,
    marginVertical: 10,
  },

  text: {
    flex: 1,
    fontSize: 18,
  },
});

export default AppPicker;
