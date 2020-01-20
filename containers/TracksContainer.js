//React
import React, {useEffect} from 'react';
import { View, Text, FlatList, TouchableHighlight, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
//Components
import Header from '../components/Header';
import TrackCard from '../components/artists/TrackCard';
//imports
import { votesByArtistAlbum } from '../requests';


const TracksContainer = ({navigation, tracks, selectedArtist, userToken, addVote}) => {

    useEffect(() => {
        votesByArtistAlbum(selectedArtist.id, navigation.getParam('name'), userToken)
        .then(obj => {
            obj.forEach(vote => (
                tracks.forEach(track => {
                    if (track.name.toLowerCase().includes(vote.songName.toLowerCase())) {
                        addVote(track, vote)
                    }
                })
            )) 
        })
    }, [])

    return(

        <View style={{flex: 1}}>

            <Header navigation={navigation} />

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', top: 40}}>

                <Text style={{fontSize: 20, textAlign: 'center'}}>{navigation.getParam('name')} by {selectedArtist.name}</Text>

                <SafeAreaView style={{flex: 1}}>
                    <ScrollView contentContainerStyle={{paddingBottom: 40}}>
                        {tracks.map(track => <TrackCard track={track} key={track.id} />)}
                    </ScrollView>
                </SafeAreaView>
                
            </View>
        </View>

    )
}

const msp = state => {
    return {
        tracks: state.spotify.tracks,
        selectedArtist: state.spotify.selectedArtist,
        userToken: state.userAuth.jwt
    }
}

const mdp = dispatch => {
    return{
        addVote: (track, vote) => dispatch({type: 'ADD_VOTE', track, vote})
    }
}

export default connect(msp, mdp)(TracksContainer);