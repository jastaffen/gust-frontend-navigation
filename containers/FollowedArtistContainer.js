//React
import React, {useState, useEffect} from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, Button, View, Image } from 'react-native';
import { connect } from 'react-redux';
//Components
import Header from '../components/Header'
import ArtistCard from '../components/artists/ArtistCard';



const FollowedArtistContainer = ({navigation, follows}) => {


    return(

    <View style={{flex: 1}}>

        <Header navigation={navigation} isHome={true} />

        <SafeAreaView style={{flex: 1, position: 'relative', top: 80}}>
            <ScrollView style={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}} contentContainerStyle={{justifyContent: 'center', alignContent: 'center', alignItems: 'center', paddingBottom: 90}}>
                    {follows.length > 0 ?  follows.map(artist => <ArtistCard key={artist.id} artist={artist} navigation={navigation} followedArtist={true} />) : <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: '25%', width: 300}}><Text style={{textAlign: 'center', color: 'blue', fontSize: 18}}>You haven't followed any artists yet. Search for artists and follow them!</Text></View>}
            </ScrollView>
        </SafeAreaView>
        
    
    </View>
    )
}

const msp = state => {
    return {
        follows: state.follows.follows
    }
}


export default connect(msp)(FollowedArtistContainer);