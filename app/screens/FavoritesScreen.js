//CORRELATES TO MY LOCATION.
import React, { useState } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";

import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";
import AppButton from "../components/AppButton";
import AppItemList from "../components/AppItemList";
import AppPicker from "../components/AppPicker";
import AppIcon from "../components/AppIcon";
import DataManager from "../config/DataManager";

// Categorical Data
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

//Gets Instanced locations
const getLocations = () => {
  let generalData = DataManager.getInstance();
  let user = generalData.getUserID();
  return generalData.getLocations(user);
};


function FavoritesScreen({ navigation }) {
  const locationList = getLocations();

  const [category, setCategory] = useState();

  const [refreshing, setRefreshing] = useState(false);

  const [newlocations, setLocations] = useState(locationList);


  //refresh display with new list without selected item
  const handleDelete = (location) => {
    const newLocationList = newlocations.filter (item => item.locationid !== location.locationid);
    setLocations(newLocationList);
  }; 

  //deletes from Datamanager
  const removeLocation = (locID) => {
    let generalData = DataManager.getInstance();
    generalData.removeLocation(locID);
  };

  //refresh display with new list of same category events
  const handleFilter = (data) => {
    const newLocationList = newlocations.filter (item => item.category === data.label);
    setLocations(newLocationList);
  };

  // Generates ID for selected item information retrieval in information screen
  const setLocationID = (locationid) =>{
    let generalData = DataManager.getInstance();
    let LocationID = locationid;

    generalData.setLocationID(LocationID);
  }

  
  return (
    <AppScreen style={styles.container}>
      <View>
        <AppPicker
          selectedItem={category}
          onItemSelect={(item) => {
            setCategory(item);
            handleFilter(item);
          }}
          data={categories}
          icon="apps"
          placeholder="Categories"
          
        />
      </View>

      <FlatList
        data={newlocations}
        keyExtractor={(location) => location.locationid.toString()}
        refreshing={refreshing}
        onRefresh={() => setLocations(locationList)}
        renderItem={({ item }) => (
          <AppItemList
            title={item.name}
            image={item.image}
            subtitle={item.visited}
            category={item.category}
            onPress={() =>{
              setLocationID(item.locationid);
              navigation.navigate("Information");
            }
            }
            style={styles.infocontainer}
            onSwipeLeft={() => (
              <View style={styles.delete}>
                <TouchableOpacity onPress={() => {
                  handleDelete(item);
                  removeLocation(item.locationid);
                  }}>
                  <AppIcon
                    name="trash-can"
                    size={70}
                    iconCol={AppColors.PrimaryColor}
                    backgroundColor={AppColors.alert}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <View style={styles.button}>
        <AppButton
          title="Add Location"
          onPress={() => navigation.navigate("NewLocation")}
        />
      </View>

    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.PrimaryColor,
    flex: 1,
    padding: 20,
  },
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: AppColors.AlternativeColor,
  },
  delete: {
    backgroundColor: AppColors.SecondaryColor,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  infocontainer: {
    flex: 1,
    width: "100%",
  },
});
export default FavoritesScreen;
