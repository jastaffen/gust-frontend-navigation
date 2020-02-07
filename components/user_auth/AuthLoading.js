//React
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View, AsyncStorage} from 'react-native';
import { connect } from 'react-redux';
//imports
import { getSpotifyToken, getUserInfo } from '../../requests';
import { styles } from '../../stylesheet';


const AuthLoading = ({navigation, setSpotifyToken}) => {

  //   const [userId, setUserId] = useState(null);
  //   const [token, setToken] = useState(null);
   
  //   useEffect(() => {
  //     let userId = getToken();
  //     debugger;
  //     navigation.navigate(userId === 'none' ? 'auth' : 'app')
  //   }, []);

  // //   function _retrieveUserId() {
  // //     return AsyncStorage.getItem('userId', (err, result) => {
  // //       setUserId(result)
  // //     })
  // //   };

  // const getToken = async () => {
  //   let token = '';
  //   try {
  //     token = await AsyncStorage.getItem('token') || 'none';
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  //   return token;
  // }

  // //  function _retrieveToken() {
  // //     return AsyncStorage.getItem('token', (err, result) => {
  // //       setToken(result)
  // //     })
  // //   }

    useEffect(() => {
      // AsyncStorage.removeItem('token')
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