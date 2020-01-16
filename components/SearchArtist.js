//React
import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';
//Imports
import SearchIcon from '../images/search.png';

const SearchArtists = ({navigation}) => {

    return(

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            <View style={styles.formContainer}>

                <Image style={styles.imageStyle} source={SearchIcon} />
                <TextInput style={styles.input} autoCapitalize='words' placeholder="search for an artist:" />
                
            </View>

            <TouchableHighlight onPress={() => navigation.navigate('DYM')}>
                    <Text style={styles.searchButton}>Search it Up!</Text>
            </TouchableHighlight>

        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#2FA8F8',
        height: 40,
        margin: 10,
        width: 260,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 40,
        color: '#2FA8F8'
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    searchButton: {
        color: '#2FA8F8', 
        fontSize: 16, 
        fontWeight: 'bold', 
        borderWidth: 1, 
        borderColor: '#2FA8F8', 
        padding: 8, 
        borderRadius: 10
    }
})


export default SearchArtists;