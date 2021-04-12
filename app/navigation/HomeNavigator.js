import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import LocationsScreen from '../screens/LocationsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const AppStack = createStackNavigator();

//Secondary Navigator 
const HomeNavigator = () => (
    <AppStack.Navigator mode="modal" screenOptions={{headerShown:false}}>
        <AppStack.Screen name='Home' component={HomeScreen}/>
        <AppStack.Screen name='Locations' component={LocationsScreen}/>
        <AppStack.Screen name='Favorites' component={FavoritesScreen}/>
        <AppStack.Screen name='Welcome' component={WelcomeScreen} />
    </AppStack.Navigator>
)

export default HomeNavigator;