//React
import React from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View,} from 'react-native';
//imports
import { getSpotifyToken } from '../../requests';

class AuthLoading extends React.Component {

  // componentDidMount() {
    
  // }


  

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoading;