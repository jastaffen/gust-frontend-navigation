//React
import React, {useEffect} from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View,} from 'react-native';
import { connect } from 'react-redux';
//imports
import { getSpotifyToken } from '../../requests';
import { styles } from '../../stylesheet';

const AuthLoading = ({navigation, setSpotifyToken, spotifyToken}) => {
 
    useEffect(() => {
      getSpotifyToken()
      .then(token => {
        setSpotifyToken(token.access_token)
        navigation.navigate('app');
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
  }
}

export default connect(msp, mdp)(AuthLoading);