import React from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';

import AppColors from '../config/AppColors';
import AppText from '../components/AppText';
import AppFont from '../config/AppFont';


//Handles a template for Cards
function AppCard({name, city, image, date, category, user}) {
    return (
        <View style={styles.container}>
            {isFinite(image) ? <Image source={image} style={styles.image}/> : <><Image source={{uri: image}} style={styles.image}/></>}
            <AppText style={styles.title}>Establishment Name: {name}</AppText>
            {city && <AppText style={styles.subtitle}>City: {city}</AppText>}
            {date && <AppText style={styles.subtitle}>Date Visited: {date}</AppText>}
            {category && <AppText style={styles.subtitle}>Category: {category}</AppText>}
            {user && <AppText style={styles.subtitle}>Submitted By: {user}</AppText>}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.AlternativeColor,
        borderRadius:20,
        overflow: 'hidden',
        padding: 10,
        marginBottom: 20
    },
    image:{
        borderRadius:15,
        height:220,
        width:"100%"
    },
    title:{
        fontSize: AppFont.CardInfoName
    },
    subtitle:{
        fontSize: AppFont.CardInfoOther
    },
})
export default AppCard;