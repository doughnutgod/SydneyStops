import React from 'react';

import { Text, StyleSheet, Platform } from 'react-native';
import AppColors from '../config/AppColors';
import AppFont from '../config/AppFont';

//Handles a template for Alerts
function AlertText({children, style}) {
    return (
        <Text style={[styles.text, style]}> {children} </Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:AppFont.Alert,
        fontFamily: Platform.OS === 'android' ? AppFont.MainFont : AppFont.AlternateOSAlert,
        color: AppColors.alert,
        
    }
})

export default AlertText;