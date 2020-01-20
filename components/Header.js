//React
import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Modal } from 'react-native';
import { connect } from 'react-redux';
//Dimensions
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
//Imports
import LogoPicture from '../images/gustlogo.jpg'
import GoBack from '../images/gobackthin.png';


const Header = ({navigation, firstName, isHome}) => {
    
    return (

        <View style={styles.homePageHeaderContainer}>

            {isHome ? 
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image source={LogoPicture} style={{resizeMode: 'contain', width: 50, height: 50, left: 5}}/>
            </TouchableOpacity> 
            : 
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={GoBack}  style={{resizeMode: 'contain', width: 40, height: 40, left: 5}} />
            </TouchableOpacity>
            }

            <Text style={styles.mainText}>GUST</Text>
            <Text style={styles.welcome}>Hi {firstName}</Text>
            
        </View>

    )
};

const msp = state => {
    return {
        firstName: state.userAuth.user.firstName
    }
}

export default connect(msp)(Header);

const styles = StyleSheet.create({
    homePageHeaderContainer: {
        flexDirection: 'row',
        top: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
    },
    mainText: {
        color: '#2FA8F8',
        fontSize: 30,
        alignSelf: 'center',
    },
    welcome: {
        color: '#2FA8F8',
        fontSize: 10,
        right: 10,
        fontWeight: 'bold'
    },
})
