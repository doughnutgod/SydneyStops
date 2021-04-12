import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppColors from "../config/AppColors";
import AppButton from "../components/AppButton";
import AlertText from "../components/AppText";
import AppText from "../components/AppText";

//Schema for Yup Validation
const schema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6).max(12),
  name: Yup.string().required().min(2).max(20),
});



function RegisterScreen({navigation}) {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.loginContainer}>
        <MaterialCommunityIcons
          name="map-marker"
          size={100}
          color={AppColors.SecondaryColor}
        />
      </View>

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log({ values })}
        validationSchema={schema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <View style={styles.inputs}>
              <AppTextInput
                autoCapatilize="none"
                icon="account"
                placeholder="Name"
                onChangeText={handleChange("name")}
              />
              <AlertText>{errors.name}</AlertText>
              <AppTextInput
                autoCapatilize="none"
                icon="at"
                placeholder="Email Address"
                onChangeText={handleChange("email")}
              />
              <AlertText>{errors.email}</AlertText>
              <AppTextInput
                autoCapatilize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
              />
              <AlertText>{errors.password}</AlertText>
            </View>
            <AppButton title="Sign Up" onPress={handleSubmit} />
          </>
        )}
      </Formik>

      <View style={styles.textcontainer}>
        <TouchableHighlight onPress={() => navigation.navigate("Login")}>
          <AppText style={styles.text}>Already Registered? CLICK HERE!</AppText>    
        </TouchableHighlight>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.PrimaryColor,
    padding: 30,
  },
  loginContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40,
  },
  inputs: {
    marginTop: 25,
    marginBottom: 40,
  },
  textcontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    
  },
  text:{
    fontSize: 18
  }
});

export default RegisterScreen;
