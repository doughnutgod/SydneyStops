import React from "react";

import { Text, StyleSheet, Platform } from "react-native";
//import AppColors from '../config/AppColors';

//Handles a template for text
function AppText({ children, style }) {
  return <Text style={[styles.text, style]}> {children} </Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "sans-serif-medium" : "Arial",
  },
});

export default AppText;
