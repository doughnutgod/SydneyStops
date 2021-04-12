import React from 'react';
import { TouchableOpacity, StyleSheet  } from 'react-native';

import AppIcon from './AppIcon';
import AppText from './AppText';

//Handles a template for specific item in picker
function AppPickerItem({onPress, label, icon}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <AppIcon name={icon} iconColor ="white" backgroundColor="red" size={30}/>
            <AppText style={styles.text}> {label} </AppText>
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:15,
        flexDirection:"row",
    },
    text:{
        fontSize:22
    }
})
export default AppPickerItem;