import React, { useState } from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";

import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppColors from "../config/AppColors";
import AppButton from "../components/AppButton";
import AlertText from "../components/AlertText";
import AppText from "../components/AppText";
import DataManager from "../config/DataManager";

//User Array
const VerifiedUsers = [
  {
    id: "user1",
    name: "Samantha Carter",
    email: "samcarter@gmail.com",
    password: "midway1",
    image: require('../assets/UserSam.jpg')
  },
  {
    id: "user2",
    name: "Daniel Jackson",
    email: "dannyboy@gmail.com",
    password: "omadesala",
    image: require('../assets/User2.jpg')
  },
  {
    id: "user0",
    name: "admin",
    email: "admin@sydneystops.com",
    password: "123456",
    image: require('../assets/AdminUser.jpg')
  },
];

//User Validation
const ValidateUser = ({ email, password }) => {
  return (
    VerifiedUsers.filter(
      (user) => user.email === email && user.password === password
    ).length > 0
  );
};

//Generation of a User Instance
const createUser = ({email}) => {
  let generalData = DataManager.getInstance();
  let userID = getUser({email}).id;
  generalData.setUserID(userID);

}

//Obtaining user via email
const getUser = ({email}) => {
  return  VerifiedUsers.find((user) => user.email === email);
}

//Yup Schema
const schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).max(12).label("Password"),
});

function LoginScreen({ navigation, route }) {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.loginContainer}>
        <MaterialCommunityIcons
          name="map-marker"
          size={80}
          color={AppColors.SecondaryColor}
        />
      </View>
      
      <Formik
      //Handles the login form using the Formik API
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          //Call of validation using Yup API
          if (ValidateUser(values)) {
            resetForm();
            createUser(values);
            navigation.navigate("Home", {
              screen: "Home",
              params: {
                screen: "Home",
                params: { paramsEmail: getUser(values).email, 
                paramsName: getUser(values).name,
              paramsImage: getUser(values).image},
              },
            });
          } else {
            resetForm();
            alert("!INVALID CREDENTIALS!");
          }
        }}
        validationSchema={schema}
      >
        {({ handleChange, handleSubmit, errors, values }) => (
          <>
            <View style={styles.inputs}>
              <AppTextInput
                autoCapatilize="none"
                icon="at"
                keyboardType="email-address"
                placeholder="Email Address"
                onChangeText={handleChange("email")}
                value={values.email}
              />
              <AlertText>{errors.email}</AlertText>
              <AppTextInput
                autoCapatilize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                value={values.password}
              />
              <AlertText>{errors.password}</AlertText>
            </View>
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <View style={styles.textcontainer}>
        <TouchableHighlight onPress={() => navigation.navigate("Welcome")}>
          <AppText style={styles.text}>
            Don't have an account? CLICK HERE!
          </AppText>
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
    marginTop: 60,
  },
  inputs: {
    marginTop: 25,
    marginBottom: 30,
  },
  textcontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  text: {
    fontSize: 18,
  },
});

export default LoginScreen;
