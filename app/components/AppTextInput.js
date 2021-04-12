import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppFont from '../config/AppFont';

//Handles a template for Text Inputs
function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={24} />}
      <TextInput style={styles.inputText} {...otherProps} />
    </View>
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

  inputText: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? AppFont.PlaceHolder : "Arial",
    color: "#707070",
    marginLeft: 10,
    flex: 1,
  },
});

export default AppTextInput;
