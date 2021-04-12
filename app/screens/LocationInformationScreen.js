import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import AppScreen from "../components/AppScreen";
import AppCard from "../components/AppCard";
import DataManager from "../config/DataManager";
import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";

//Gets a specific locations information
const getLocation = () => {
  let generalData = DataManager.getInstance();
  let locID = generalData.getLocationID();
  return generalData.getLocation(locID);
};

function LocationInformationScreen({ navigation }) {
  const location = getLocation();

  return (
    <AppScreen>
        <View style={styles.container}>
      <FlatList
        data={location}
        keyExtractor={(location) => location.locationid.toString()}
        renderItem={({ item }) => (
          <AppCard
            image={item.image}
            name={item.name}
            city={item.city}
            date={item.visited}
            category={item.category}
            user={item.userid}
          />
        )}
      />

      <AppButton
      title = "Home"
      onPress={()=> {
          navigation.navigate("Home");
      }}
      />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
      backgroundColor: AppColors.PrimaryColor,
      padding: 30,
  },
});

export default LocationInformationScreen;
