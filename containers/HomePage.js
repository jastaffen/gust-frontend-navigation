//React
import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, AsyncStorage, Keyboard } from 'react-native'
import { connect } from 'react-redux';
//Components
import Header from '../components/Header';
import SearchArtist from '../components/artists/SearchArtist';
//imports
import { followedArtists, getUserInfo } from '../requests';

const HomePage = ({navigation, fetchFollows, userToken}) => {

    const [isMounted, setMounted] = useState(false)
    

    useEffect(() => {
      followedArtists(userToken)
      .then(obj => {
        if (obj.error) {
          console.log(error)
        } else {
          fetchFollows(obj)
          // _retrieveData();
        }
      })
      setMounted(true);
    }, [])


    // _retrieveData = async () => {
    //   const userToken = await AsyncStorage.getItem('token');
    //   const userId = await AsyncStorage.getItem('userId');
    //   console.log(userId);
    //   getUserInfo(userToken, userId)
    //   .then(obj => {
    //       // console.log(obj)
    //       addingUser(obj.user, obj.jwt);
    //       navigation.navigate(userToken ? 'app' : 'auth')  
    //   })
      
    // }

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
    fetchFollows: (follows) => dispatch({type: 'ADD_FOLLOWS', follows})
  }
}

export default connect(msp, mdp)(HomePage);



