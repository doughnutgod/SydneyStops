import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppTab = createBottomTabNavigator();


import LocationsScreen from '../screens/LocationsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeNavigator from './HomeNavigator';
import NewLocationScreen from '../screens/NewLocationScreen';
import AppIcon from '../components/AppIcon';
import AppColors from '../config/AppColors';



//Tertiary Navigator
const TabNavigator = () => (
<AppTab.Navigator tabBarOptions={{activeTintColor: AppColors.AlternativeColor, activeBackgrondColor: AppColors.PrimaryColor}}>
    <AppTab.Screen name="My Locations" component = {FavoritesScreen} options={{tabBarIcon:()=> <AppIcon name="star-face" size={30}iconCol={AppColors.OtherColor} backgroundColor={AppColors.SecondaryColor}/>}}/>
    <AppTab.Screen name="Home" component = {HomeNavigator} options={{tabBarIcon:()=> <AppIcon name="city-variant" size={30}iconCol={AppColors.OtherColor} backgroundColor={AppColors.SecondaryColor}/>}}/>
    <AppTab.Screen name="Locations" component = {LocationsScreen} options={{tabBarIcon:()=> <AppIcon name="map-marker" size={30}iconCol={AppColors.OtherColor} backgroundColor={AppColors.SecondaryColor}/>}}/>
    <AppTab.Screen name='NewLocation' component={NewLocationScreen} options={{tabBarIcon:()=> <AppIcon name="format-line-weight" size={30}iconCol={AppColors.OtherColor} backgroundColor={AppColors.SecondaryColor}/>}}/>
</AppTab.Navigator>
)

export default TabNavigator;