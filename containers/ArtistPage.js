//React
import React, {useState, useEffect} from 'react';
import { View, Text, TouchableHighlight, ScrollView, ImageBackground, Dimensions, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
//Components
import Header from '../components/Header';
import AlbumLoadingScreen from '../components/artists/AlbumLoadingScreen';
import AlbumCarousel from '../components/artists/AlbumCarousel';
//imports
import { fetchArtistAlbums, followArtist, unfollowArtist } from '../requests';
import { styles } from '../stylesheet';

const width = Dimensions.get('window').width;

const ArtistPage = ({navigation, spotifyToken, selectedArtist, country, loadingScreen, getAlbums, albums, userData, addFollow, unFollow, follows}) => {
    
    const [isFollowed, setFollowed] = useState(false);

    const alreadyFollowed = () => {
        return follows.map(follow => {
            if (follow.apiArtistId === (selectedArtist.id) || (follow.apiArtistId === selectedArtist.apiArtistId)) {
                setFollowed(true)
            }
        })
    }

    const handleFollow = () => {
        if (!isFollowed) {
            followArtist(selectedArtist.id, selectedArtist.images[0].url, selectedArtist.images[1].url, selectedArtist.images[2].url, selectedArtist.name, userData.user.id, userData.jwt)
            .then(obj => addFollow(obj.follow))
            setFollowed(true);
        } else {
            if (selectedArtist.apiArtistId) {
                unfollowArtist(selectedArtist.apiArtistId, userData.jwt)
                .then(obj => unFollow(obj.follow))
                navigation.navigate('Home');
            } else {
                unfollowArtist(selectedArtist.id, userData.jwt)
                .then(obj => unFollow(obj.follow))
                setFollowed(false);
            }
            
        }   
    }

    useEffect(() => {
        loadingScreen();
        alreadyFollowed();
        if (navigation.getParam('followedArtist')) {
            fetchArtistAlbums(spotifyToken, selectedArtist.apiArtistId, country)
            .then(obj => getAlbums(obj.items))
        } else {
            fetchArtistAlbums(spotifyToken, selectedArtist.id, country)
            .then(obj => getAlbums(obj.items))
        }
    }, []);

    useEffect(() => {
        loadingScreen();
        alreadyFollowed();
        if (navigation.getParam('followedArtist')) {
            fetchArtistAlbums(spotifyToken, selectedArtist.apiArtistId, country)
            .then(obj => getAlbums(obj.items))
        } else {
            fetchArtistAlbums(spotifyToken, selectedArtist.id, country)
            .then(obj => getAlbums(obj.items))
        }
    }, [selectedArtist]);

    return(

        <View style={{flex: 1}}>

            <Header navigation={navigation} />

            <SafeAreaView style={{top: 20}}>

                <ScrollView vertical style={{height: 600}}>

                    <ImageBackground source={navigation.getParam('followedArtist') ? {uri: selectedArtist.largeImage} : selectedArtist.images[1]} style={{width: width, 
                        height: width, resizeMode: 'contain', borderWidth: 1, zIndex: 5}}>
                            
                                <Text style={styles.artistName}>{selectedArtist.artistName ? selectedArtist.artistName : selectedArtist.name}</Text>

                                <TouchableHighlight style={isFollowed ? [styles.followButton, styles.followed] : [styles.followButton, styles.notFollowed]} onPress={handleFollow}>
                                    <Text style={{textAlign: 'center', color: 'white'}}>{isFollowed ? 'Unfollow' : 'Follow'}</Text>
                                </TouchableHighlight>

                    </ImageBackground>

                    <SafeAreaView  style={{top: -80, zIndex: 20}}>

                            {!albums ? <AlbumLoadingScreen /> : <AlbumCarousel navigation={navigation} albums={albums} spotifyToken={spotifyToken} /> }
                        
                    </SafeAreaView>
                    
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
        isLoading: state.spotify.isLoading,
        userData: state.userAuth,
        follows: state.follows.follows
    }
};

const mdp = dispatch => {
    return {
        loadingScreen: () => dispatch({type: 'LOADING'}),
        getAlbums: (albums) => dispatch({type: 'GET_ALBUMS', albums}),
        addFollow: (follow) => dispatch({type: 'ADD_FOLLOW', follow}),
        unFollow: (follow) => dispatch({type: 'UNFOLLOW', follow})
    }
}

export default connect(msp, mdp)(ArtistPage);