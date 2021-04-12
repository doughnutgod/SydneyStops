import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";
import AppItemList from "../components/AppItemList";
import AppPicker from "../components/AppPicker";
import DataManager from "../config/DataManager";

//Categorical Data
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

// Pulls all locations from data manager for rendering
const getAllLocations = () => {
  let generalData = DataManager.getInstance();
  return generalData.getAllLocations();
}

function LocationsScreen({ navigation }) {
  const [category, setCategory] = useState();
  const allLocationList = getAllLocations();

  // Generates ID for selected item information retrieval in information screen
  const setLocationID = (locationid) =>{
    let generalData = DataManager.getInstance();
    let LocationID = locationid;

    generalData.setLocationID(LocationID);
  }

  const [refreshing, setRefreshing] = useState(false);
  const [newlocations, setLocations] = useState(allLocationList);

   //refresh display with new list of same category events
   const handleFilter = (data) => {
    const newLocationList = newlocations.filter (item => item.category === data.label);
    setLocations(newLocationList);
  };

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
        keyExtractor={location => location.locationid.toString()}
        refreshing={refreshing}
        onRefresh={() => setLocations(allLocationList)}
        renderItem={({ item }) => (
          <AppItemList
            image={item.image}
            title={item.name}
            subtitle={item.visited}
            category={item.category}
            onPress={() => {
              setLocationID(item.locationid);
              navigation.navigate("Information");}}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

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
    height: 1,
    backgroundColor: AppColors.AlternativeColor,
  },
});

export default LocationsScreen;
