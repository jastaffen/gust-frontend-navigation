//React
import React, {useEffect} from 'react';
import { View, Text, Button, ScrollView, ImageBackground, Dimensions, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
//Components
import Header from '../components/Header';
import AlbumLoadingScreen from '../components/artists/AlbumLoadingScreen';
import AlbumCarousel from '../components/artists/AlbumCarousel';
//imports
import { fetchArtistAlbums } from '../requests';
import { styles } from '../stylesheet';

const width = Dimensions.get('window').width;

const ArtistPage = ({navigation, spotifyToken, selectedArtist, country, loadingScreen, getAlbums, albums, isLoading}) => {
    
    useEffect(() => {
        loadingScreen();
        fetchArtistAlbums(spotifyToken, selectedArtist.id, country)
        .then(obj => getAlbums(obj.items))
    }, []);

    return(

        <View style={{flex: 1}}>

            <Header navigation={navigation} />

            <SafeAreaView style={{top: 20}}>

                <ScrollView vertical style={{height: 600}}>

                    <ImageBackground source={selectedArtist.images[1]} style={{width: width, 
                        height: width, resizeMode: 'contain', borderWidth: 1, zIndex: 5}}>
                            <Text style={styles.artistName}>{selectedArtist.name}</Text>
                    </ImageBackground>

                    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={{top: -90, zIndex: 20}}>
                                {!albums ? <AlbumLoadingScreen /> : <AlbumCarousel albums={albums} /> }
                    </ScrollView>
                    

                </ScrollView>
            </SafeAreaView>

        </View>
    )
};

const msp = state => {
    return {
        spotifyToken: state.spotify.spotifyToken,
        selectedArtist: state.spotify.selectedArtist,
        country: state.userAuth.country,
        albums: state.spotify.albums,
        isLoading: state.spotify.isLoading
    }
};

const mdp = dispatch => {
    return {
        loadingScreen: () => dispatch({type: 'LOADING'}),
        getAlbums: (albums) => dispatch({type: 'GET_ALBUMS', albums})
    }
}

export default connect(msp, mdp)(ArtistPage);