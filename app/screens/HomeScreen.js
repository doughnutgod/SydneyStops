import React from "react";
import { View, StyleSheet,} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppColors from "../config/AppColors";
import AppItemList from "../components/AppItemList";
import AppIcon from "../components/AppIcon";

function HomeScreen({ navigation, route }) {
  
  return (
    
    <AppScreen style={styles.layer}>
      <View style={styles.welcomeView}>
        <MaterialCommunityIcons
          name="city-variant"
          size={100}
          color={AppColors.SecondaryColor}
        />

        <AppText style={styles.welcometext}>
          WELCOME TO SYDNEY STOPS! 
        </AppText>

        <View style={styles.profile}>
          <AppItemList
            image={route.params.paramsImage}
            title={route.params.paramsName}
            subtitle={route.params.paramsEmail}
          />
        </View>

        <View style={styles.linking}>
          <View>
            <AppItemList
              style={styles.logout}
              title="Locations"
              Icon={
                <AppIcon
                  name="map-marker"
                  size={50}
                  iconCol={AppColors.OtherColor}
                  backgroundColor={AppColors.SecondaryColor}
                />
              }
              onPress={() => navigation.navigate("Locations")}
            />
          </View>
          <View style={styles.separator}/>
          <View>
            <AppItemList
              style={styles.logout}
              title="My Locations"
              Icon={
                <AppIcon
                  name="star-face"
                  size={50}
                  iconCol={AppColors.OtherColor}
                  backgroundColor={AppColors.SecondaryColor}
                />
              }
              onPress={() => navigation.navigate("Favorites")}
            />
          </View>
        </View>

        <View style={styles.logout}>
          <AppItemList
            title="Logout"
            Icon={
              <AppIcon
                name="logout"
                size={50}
                iconCol={AppColors.OtherColor}
                backgroundColor={AppColors.SecondaryColor}
              />
            }
            onPress={() => {
              navigation.navigate("Logout");
            }}
          />
        </View>
      </View>
    </AppScreen>
  
  );
  
}


const styles = StyleSheet.create({
  layer: {
    backgroundColor: AppColors.PrimaryColor,
  },

  welcomeView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },

  welcometext: {
    color: AppColors.OtherColor,
    fontWeight: "bold",
  },

  profile: {
    marginTop: 50,
    backgroundColor: AppColors.AlternativeColor,
    width: "100%",
    paddingLeft: 20,
    padding: 5,
  },
  linking: {
    marginVertical: 80,
    width: "100%",
    justifyContent: "space-between",

  },
  logout: {
    backgroundColor: AppColors.AlternativeColor,
    height: 60,
    width: "100%",
    paddingLeft: 20,
    padding: 5,
  },
  separator: {
    width: "100%",
    height: 3,
    backgroundColor: AppColors.PrimaryColor,
  },
});

export default HomeScreen;
