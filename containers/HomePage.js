//React
import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { connect } from 'react-redux';
//Components
import Header from '../components/Header';
import SearchArtist from '../components/artists/SearchArtist';
//imports
import { followedArtists, getUserInfo, votesByUserLocation } from '../requests';

const HomePage = ({navigation, fetchFollows, userToken}) => {

    const [isMounted, setMounted] = useState(false)
    

    useEffect(() => {
      followedArtists(userToken)
      .then(obj => {
        if (obj.error) {
          console.log(error)
        } else {
          fetchFollows(obj)
        }
      })
      setMounted(true);
    }, [])

    return(
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

        <View style={{flex: 1}}>

          <Header navigation={navigation} isHome={true} title={"GUST"} />

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
    fetchFollows: (follows) => dispatch({type: 'ADD_FOLLOWS', follows})
  }
}

export default connect(msp, mdp)(HomePage);



