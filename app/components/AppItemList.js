import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../components/AppText";
import AppColors from "../config/AppColors";
import AppFont from "../config/AppFont";


//Handles a template for Listed Items
function AppItemList({ category, image, title, subtitle, Icon, onPress, onSwipeLeft, style }) {
  return (
    <Swipeable renderRightActions ={onSwipeLeft}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor={AppColors.white}
      >
        <View style={[styles.container, style]}>
          {Icon}
          {isFinite(image) ? <Image source={image} style={styles.image}/> : <><Image source={{uri: image}} style={styles.image}/></>}
          <View style={styles.infoContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
            {category && <AppText style={styles.subtitle}>{category}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginRight: 10,
  },

  infoContainer: {
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    fontSize: AppFont.StandardTitle,
    marginVertical: 8,
  },
  subtitle: {
    fontSize: AppFont.StandardSubtitle,
  },
});

export default AppItemList;
