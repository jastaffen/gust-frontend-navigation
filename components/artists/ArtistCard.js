//React
import React from 'react';
import { ImageBackground, Text, TouchableHighlight, Dimensions } from 'react-native';
import { connect } from 'react-redux';
//Imports
import { styles } from '../../stylesheet';
//Constants
const width = Dimensions.get('window').width;

const ArtistCard = ({navigation, artist, selectedArtist}) => {
    
    // console.log(artist);
    const handleArtistCardPress = () => {
        selectedArtist(artist);
        navigation.navigate('Artist');
    }

    return(

        <TouchableHighlight style={styles.dymArtistContainer} onPress={handleArtistCardPress}>
            <ImageBackground source={artist.images[0]} style={{width: width, height: 100, opacity: 0.9, justifyContent: 'center'}}>
                <Text style={styles.dymArtistText}>{artist.name}</Text>
            </ImageBackground>
        </TouchableHighlight>
        
    )
};

const mdp = dispatch => {
    return {
        selectedArtist: (selectedArtist) => dispatch({type: "SELECT_ARTIST", selectedArtist})
    }
}

export default connect(null, mdp)(ArtistCard);