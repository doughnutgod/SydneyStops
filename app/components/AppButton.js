import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';


import AppColors from '../config/AppColors';
import AppFont from '../config/AppFont';
import { LinearGradient } from 'expo-linear-gradient';

//Handles a template for Buttons
function AppButton({title,  onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View >
                <LinearGradient style={styles.button} colors={[AppColors.MainButton, AppColors.SecondButton, AppColors.ThirdButton]}>
                <Text style={styles.text}> {title} </Text>
                </LinearGradient>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: AppColors.MainButton,
        borderRadius: 50,
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:10,
     
    },
    text:{
        fontSize: AppFont.Button,
        textTransform:'uppercase',
        fontWeight: 'bold'
    }

})

export default AppButton;

//<AppButton title="Click here"> </AppButton>