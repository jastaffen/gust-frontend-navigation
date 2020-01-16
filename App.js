//React
import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, Button, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';
//Components
import HomePage from './containers/HomePage';
import DidYouMeanContainer from './containers/DidYouMeanContainer';
import ArtistPage from './containers/ArtistPage';
import GustDrawer from './components/GustDrawer';
import EditProfile from './components/EditProfile';





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

const MainStack = createStackNavigator({
  Home: HomeStack,
  EditProfile: {
    screen: EditProfile,
    navigationOptions: navigationOptionHandler
  }
}, {
  initialRouteName: 'Home'
})

const appDrawer = createDrawerNavigator({
  drawer: MainStack
}, {
  contentComponent: GustDrawer,
  drawerWidth: Dimensions.get('window').width * 0.83
})

export default createAppContainer(appDrawer);
