//React
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack'
//Components
import HomePage from './containers/HomePage';
import DidYouMeanContainer from './containers/DidYouMeanContainer';
import ArtistPage from './containers/ArtistPage';



const navigationOptionHandler = (navigation) => ({
  header: null
});

const HomeStack = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: navigationOptionHandler
  },
  DYM: {
    screen: DidYouMeanContainer,
    navigationOptions: navigationOptionHandler
  },
  Artist: {
    screen: ArtistPage,
    navigationOptions: navigationOptionHandler
  }
  },
  {initialRouteName: 'Home'});

export default createAppContainer(HomeStack);
