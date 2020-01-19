//React
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native'
import { connect } from 'react-redux';
//Components
import Header from '../components/Header';
import SearchArtist from '../components/SearchArtist';
//imports
import { getSpotifyToken } from '../requests';


const HomePage = ({navigation, setSpotifyToken}) => {

    useEffect(() => {
      getSpotifyToken()
      .then(token => setSpotifyToken(token.access_token))
    }, [])

    return(
        
      <View style={{flex: 1}}>

        <Header navigation={navigation} />

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            <SearchArtist navigation={navigation} />

        </View>

      </View>
    )
};

const mdp = dispatch => {
  return {
    isLoading: () => dispatch({type: 'LOADING'}),
    setSpotifyToken: (token) => dispatch({type: 'GET_TOKEN', token})
  }
}

export default connect(null, mdp)(HomePage);