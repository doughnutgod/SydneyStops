import React from "react";
import { StyleSheet, View } from "react-native";

import AppScreen from "../components/AppScreen";
import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import AppText from "../components/AppText";
import AppFont from "../config/AppFont";

//Handles Logout
function LogoutScreen({ navigation }) {
  return (
    <AppScreen>
      <View style={styles.container}>
        <View style={styles.textcontainer}>
          <AppText style={styles.text}>Do you want to logout?</AppText>
        </View>

        <AppButton
          title="Yes"
          onPress={() => {
            navigation.navigate("Welcome");
          }}
        />

        <AppButton
          style={styles.buttonNo}
          title="No"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    flex: 1,
    backgroundColor: AppColors.PrimaryColor,
    padding: 30,
  },
  buttonNo: {
    marginTop: 100,
  },
  textcontainer:{
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: 60,
  },
  text:{
    fontSize: AppFont.StandardTitle,
    fontWeight: "bold"
  }
});

export default LogoutScreen;
