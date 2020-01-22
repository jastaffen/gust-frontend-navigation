//React
import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { connect } from 'react-redux';
//Components
import Header from '../components/Header';
import SearchArtist from '../components/artists/SearchArtist';
//imports
import { getSpotifyToken, followedArtists } from '../requests';

//setSpotifyToken
const HomePage = ({navigation, fetchFollows, userToken}) => {

    const [isMounted, setMounted] = useState(false)


    // useEffect(() => {
    //   getSpotifyToken()
    //   .then(token => setSpotifyToken(token.access_token))
    // }, [])

    useEffect(() => {
      followedArtists(userToken)
      .then(obj => fetchFollows(obj))
      setMounted(true);
    }, [])

    return(

      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

        <View style={{flex: 1}}>

          <Header navigation={navigation} isHome={true} />

          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

              {isMounted ? <SearchArtist navigation={navigation} /> : null}

          </View>

        </View>
        
      </TouchableWithoutFeedback>
    )
};

const msp = state => {
  return {
    userToken: state.userAuth.jwt
  }
}

const mdp = dispatch => {
  return {
    isLoading: () => dispatch({type: 'LOADING'}),
    setSpotifyToken: (token) => dispatch({type: 'GET_TOKEN', token}),
    fetchFollows: (follows) => dispatch({type: 'ADD_FOLLOWS', follows})
  }
}

export default connect(msp, mdp)(HomePage);



