import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppPicker from "../components/AppPicker";
import AlertText from "../components/AlertText";
import DataManager from "../config/DataManager";
import AppColors from "../config/AppColors";
import AppIcon from "../components/AppIcon";

//Array of Categories
const categories = [
  {
    value: 1,
    label: "Bar",
    icon: "beer",
  },
  {
    value: 2,
    label: "Club",
    icon: "cards",
  },
  {
    value: 3,
    label: "Resturant",
    icon: "food-fork-drink",
  },
  {
    value: 4,
    label: "Cinema",
    icon: "filmstrip",
  },
  {
    value: 5,
    label: "Park",
    icon: "pine-tree",
  },
  {
    value: 6,
    label: "Cafe",
    icon: "coffee",
  },
  {
    value: 7,
    label: "Shop",
    icon: "basket",
  },
];

function NewLocationScreen({ navigation }) {
  //Image Picker Handler
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if(pickerResult.cancelled === true){
      return;
    }

    setImage({path: pickerResult.uri});
  };

  //State Variables for data
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [visited, setVisited] = useState("");
  const [image, setImage] = useState(null);

  //State Variables for Errors
  const [nameError, setNameError] = useState("");
  const [cityError, setCityError] = useState("");
  const [visitedError, setVisitedError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [imageError, setImageError] = useState("");

  //Error Check func
  const runErrorCheck = () => {
    setNameError(name.length > 0 ? "" : "Input Valid Name");
    setCityError(city.length > 0 ? "" : "Input Valid City");
    setVisitedError(visited.length > 0 ? "" : "Input Valid Date");
    setCategoryError(
      category ? "" : "Please Select A Category From The Selection"
    );
    setImageError(image? "": "Please Select an image");
    return name.length > 0 && city.length > 0 && visited.length > 0 && category && image
      ? true
      : false;
  };

  //Parsing a new location to Data Manager
  const addLocation = () => {
    let generalData = DataManager.getInstance();
    let user = generalData.getUserID();

    const locations = generalData.getLocations(user);
    const locationID = 110 + Math.floor(Math.random() * (999 - 110));
    const newLocation = {
      name: name,
      city: city,
      visited: visited,
      category: category.label,
      locationid: locationID,
      userid: user,
      image: image.path,
    };
    
    generalData.addLocation(newLocation);
  };

  return (
    <AppScreen>
      <View style={styles.container}>
        <View style={styles.inputcontainer}>
          <AppTextInput
            icon="form-textbox"
            placeholder="Location Name"
            value={name}
            onChangeText={(input) => setName(input)}
          />

          {nameError.length > 0 ? <AlertText>{nameError}</AlertText> : <></>}

          <AppTextInput
            icon="city-variant"
            placeholder="City Name"
            value={city}
            onChangeText={(input) => setCity(input)}
          />

          {cityError.length > 0 ? <AlertText>{cityError}</AlertText> : <></>}

          <AppTextInput
            icon="calendar-month"
            placeholder="Date Visited DD/MM/YYYY"
            value={visited}
            onChangeText={(input) => setVisited(input)}
          />

          {visitedError.length > 0 ? (
            <AlertText>{visitedError}</AlertText>
          ) : (
            <></>
          )}

          <View>
            <AppPicker
              selectedItem={category}
              onItemSelect={(item) => setCategory(item)}
              data={categories}
              icon="apps"
              placeholder="Categories"
            />
          </View>
        </View>

        {categoryError.length > 0 ? (
          <AlertText>{categoryError}</AlertText>
        ) : (
          <></>
        )}

        <View style={styles.imageselct}>
          <TouchableOpacity 
          onPress={openImagePickerAsync}
          >
            <AppIcon
              name="image-album"
              size={150}
              color={AppColors.PrimaryColor}
            />
            {image && <Image source={{uri: image.path}} style={styles.image}/>}
          </TouchableOpacity>

        </View>

        {imageError.length > 0 ? (
          <AlertText>{imageError}</AlertText>
        ) : (
          <></>
        )}

        <View style={styles.submitcontainer}>
          <AppButton
            title="Add Location"
            onPress={() => {
              if (runErrorCheck()) {
                addLocation();
                navigation.navigate("Favorites");
              }
            }}
          />
        </View>
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
  inputcontainer: {
    marginTop: 20,
  },
  submitcontainer: {
    marginTop: 10,
  },
  imageselct: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"row",
  },
  image:{
    height:100,
    width:100,
    marginLeft:30
  }
});

export default NewLocationScreen;
