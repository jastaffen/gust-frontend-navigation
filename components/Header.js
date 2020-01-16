//React
import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Modal } from 'react-native';
//Dimensions
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
//Imports
import LogoPicture from '../images/gustlogo.jpg'


const Header = ({navigation}) => {

    return (

        <View style={styles.homePageHeaderContainer}>

            <TouchableOpacity onPress={() => navigation.openDrawer()}>

                <Image source={LogoPicture} style={{resizeMode: 'contain', width: 50, height: 50, left: 5}}/>

            </TouchableOpacity>

            <Text style={styles.mainText}>GUST</Text>
            <Text style={styles.welcome}>Hi </Text>
            
        </View>

    )
}

export default Header;

const styles = StyleSheet.create({
    homePageHeaderContainer: {
        flexDirection: 'row',
        top: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mainText: {
        color: '#2FA8F8',
        fontSize: 50,
        alignSelf: 'center',
        right: 15
    },
    welcome: {
        color: '#2FA8F8',
        fontSize: 14,
        right: 5
    },
})
