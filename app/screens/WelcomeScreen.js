import React from "react";
import { View, 
  StyleSheet, 
  ImageBackground,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppColors from "../config/AppColors";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <AppScreen style={styles.layer}>
      <ImageBackground
        source={require("../assets/AlternativeBackground.jpg")}
        style={styles.background}
      >
        <View style={styles.welcomeView}>
          <MaterialCommunityIcons
            name="map-marker"
            size={100}
            color={AppColors.SecondaryColor}
          />
          <AppText style={styles.welcometext}>
            WELCOME TO SYDNEY STOPS!
          </AppText>
        </View>

        <View style={styles.welcomeButtons}>
          <View style={styles.buttons2}>
            <AppButton
              title="Register"
              onPress={() => navigation.navigate("Register")}
            />

            <AppButton
              title="Login"
              color="SecondaryColor"
              onPress={() => navigation.navigate("Login")}
            />

            
           
          </View>
        </View>
      </ImageBackground>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  layer: {
    backgroundColor: "black",
  },

  background: {
    flex: 1,
    resizeMode: "cover",
  },

  welcomeView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },

  welcometext: {
    color: AppColors.OtherColor,
  },
  welcomeButtons: {
    marginTop: 300,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    width: "75%",
    marginLeft: 50,
  },

  buttons2: {
    padding: 10,
    justifyContent: "space-between",
    width: "100%",
  },
});

export default WelcomeScreen;
