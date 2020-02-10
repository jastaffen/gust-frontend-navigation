//React
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';
//imports
import { getSpotifyToken, getUserInfo } from '../../requests';
import { styles } from '../../stylesheet';


const AuthLoading = ({navigation, setSpotifyToken}) => {

    useEffect(() => {
      getSpotifyToken()
      .then(token => {
          setSpotifyToken(token.access_token);
          navigation.navigate('app') 
      })
    })

  
    return (
    <>
      
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator size="large" style={styles.authLoader} color="#2FA8F8" />
        <StatusBar barStyle="default" />
      </View> 

    </>
    );

}

const msp = state => {
  return {
    spotifyToken: state.spotify.spotifyToken
  }
}

const mdp = dispatch => {
  return {
    setSpotifyToken: (token) => dispatch({type: 'GET_TOKEN', token}),
    addingUser: (user, jwt) => dispatch({type: 'ADD_USER', user, jwt})
  }
}

export default connect(msp, mdp)(AuthLoading);