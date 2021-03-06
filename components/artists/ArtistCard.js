//React
import React from 'react';
import { ImageBackground, Text, TouchableHighlight, Dimensions } from 'react-native';
import { connect } from 'react-redux';
//Imports
import { styles } from '../../stylesheet';
//Constants
const width = Dimensions.get('window').width;

const ArtistCard = ({navigation, artist, selectedArtist, followedArtist, fromFollowedTab}) => {

    
    const handleArtistCardPress = () => {
        selectedArtist(artist);
        fromFollowedTab ? navigation.navigate('Artist', {followedArtist, fromFollowedTab}) : navigation.navigate('Artist', {followedArtist})
    }

    return(

        <TouchableHighlight style={styles.dymArtistContainer} onPress={handleArtistCardPress}>
            <ImageBackground source={followedArtist ? {uri: artist.largeImage} : artist.images[0]} style={followedArtist ? {width: width, height: 230}: {width: width, height: 100, opacity: 0.9, justifyContent: 'center'}}>
                <Text style={followedArtist ? [styles.dymArtistText, {marginVertical: '25%'}] :  styles.dymArtistText }>{followedArtist ? artist.artistName : artist.name}</Text>
            </ImageBackground>
        </TouchableHighlight>
        
    )
};

const mdp = dispatch => {
    return {
        selectedArtist: (selectedArtist) => dispatch({type: "SELECT_ARTIST", selectedArtist}),
    }
}

export default connect(null, mdp)(ArtistCard);