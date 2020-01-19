//React
import React, {useState} from 'react';
import { View, Text, FlatList, TouchableHighlight, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
//Components
import Header from '../components/Header';
import TrackCard from '../components/artists/TrackCard';


const TracksContainer = ({navigation, tracks, selectedArtist}) => {

    

    return(

        <View style={{flex: 1}}>

            <Header navigation={navigation} />

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', top: 40}}>

                <Text style={{fontSize: 30, textAlign: 'center'}}>{navigation.getParam('name')} by {selectedArtist.name}</Text>

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
        selectedArtist: state.spotify.selectedArtist
    }
}

export default connect(msp)(TracksContainer);