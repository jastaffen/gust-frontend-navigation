//React
import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
//Components
import Header from '../components/Header';
import TrackCard from '../components/artists/TrackCard';
//imports
import { votesByArtistAlbum } from '../requests';


const TracksContainer = ({navigation, tracks, selectedArtist, userToken, addVote}) => {

    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        if (selectedArtist.apiArtistId) {
            votesByArtistAlbum(selectedArtist.apiArtistId, navigation.getParam('name'), userToken)
            .then(obj => {
                
                obj.forEach(vote => (
                    tracks.forEach(track => {
                        if (track.name.toLowerCase().includes(vote.songName.toLowerCase())) {
                            addVote(track, vote);
                        }})
                ))
                
                setMounted(true)
                
             }) 
        } else {
            votesByArtistAlbum(selectedArtist.id, navigation.getParam('name'), userToken)
            .then(obj => {
                obj.forEach(vote => (
                    tracks.forEach(track => {
                        if (track.name.toLowerCase().includes(vote.songName.toLowerCase())) {
                            addVote(track, vote);
                        }})
            ))
            setMounted(true)
         })
        }
    }, [])

    return(

        <View style={{flex: 1}}>

            <Header navigation={navigation} title={"Track Page"} />

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', top: 40}}>

                <Text style={{fontSize: 20, textAlign: 'center'}}>{navigation.getParam('name')} by {selectedArtist.name}</Text>

                <SafeAreaView style={{flex: 1}}>

                    <ScrollView contentContainerStyle={{paddingBottom: 40}}>

                        {isMounted ? tracks.map(track => <TrackCard navigation={navigation} track={track} key={track.id} albumName={navigation.getParam('name')} />)
 : null}
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