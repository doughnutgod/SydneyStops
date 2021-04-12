import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LocationsScreen from '../screens/LocationsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import TabNavigator from "./TabNavigator";
import LocationInformationScreen from '../screens/LocationInformationScreen';
import LogoutScreen from '../screens/LogoutScreen';


const AppStack = createStackNavigator();

//Primary Navigator
const AuthNavigator = () => (
    <AppStack.Navigator screenOptions={{headerShown:false}}>
        <AppStack.Screen name='Welcome' component={WelcomeScreen} />
        <AppStack.Screen name='Login' component={LoginScreen}/>
        <AppStack.Screen name='Register' component={RegisterScreen}/>
        <AppStack.Screen name='Home' component={TabNavigator}/>
        <AppStack.Screen name='Locations' component={LocationsScreen}/>
        <AppStack.Screen name='Favorite' component={FavoritesScreen}/>
        <AppStack.Screen name='Information' component={LocationInformationScreen}/>
        <AppStack.Screen name='Logout' component={LogoutScreen}/>
    </AppStack.Navigator>
)

export default AuthNavigator;