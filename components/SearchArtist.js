//React
import React, {useState} from 'react';
import { View, TextInput, Image, TouchableHighlight, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
//Imports
import SearchIcon from '../images/search.png';
import { styles } from '../stylesheet';
import { fetchArtists } from '../requests';

const SearchArtists = ({navigation, spotifyToken, selectedArtist, getArtists}) => {

    const [searchText, setSearchText] = useState('');

    const handleSearchSubmit = () => {
        if (!searchText) {
            Alert.alert("You haven't searched for an artist! Search for an artist in the form above.")
        } else {
            let formattedName = searchText.toLowerCase().replace(/\s/g, '+');
            fetchArtists(spotifyToken, formattedName)
            .then(obj => {
                if (obj.artists.items.length === 0) {
                    Alert.alert('Sorry no artists were found by that name')
                } else if (obj.artists.items.length === 1) {
                    selectedArtist(obj.artists.items[0]);
                    navigation.navigate('Artist');
                } else {
                    getArtists(obj.artists.items);
                    navigation.navigate('DYM');
                }
            })
    }}

    return (

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            <View style={styles.formContainer}>

                <Image style={styles.imageStyle} source={SearchIcon} />
                
                <TextInput style={styles.searchInput} autoCapitalize='words' 
                placeholder="search for an artist:" value={searchText} 
                onChangeText={(text) => setSearchText(text)}
                onSubmitEditing={handleSearchSubmit} />
                
            </View>

            <TouchableHighlight onPress={handleSearchSubmit}>

                    <Text style={styles.searchButton}>Search it Up!</Text>

            </TouchableHighlight>

        </View>

    )
};

const msp = state => {
    return {
        spotifyToken: state.spotify.spotifyToken
    }
}

const mdp = dispatch => {
    return {
        selectedArtist: (selectedArtist) => dispatch({type: "SELECT_ARTIST", selectedArtist: selectedArtist}),
        getArtists: (artists) => dispatch({type: "GET_ARTISTS", artists: artists})
    }
}

export default connect(msp, mdp)(SearchArtists);