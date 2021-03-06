//React
import React from 'react';
import { Dimensions, Image, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
//React Navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//Components
import HomePage from './containers/HomePage';
import DidYouMeanContainer from './containers/DidYouMeanContainer';
import ArtistPage from './containers/ArtistPage';
import TracksContainer from './containers/TracksContainer'
import GustDrawer from './components/GustDrawer';
import EditProfile from './components/EditProfile';
import FollowedArtistContainer from './containers/FollowedArtistContainer';
import Login from './components/user_auth/Login';
import SignUp from './components/user_auth/SignUp';
import UpcomingShows from './containers/UpcomingShows';
import AuthLoading from './components/user_auth/AuthLoading';
import Charts from './containers/Charts';
import GraphCard from './components/artists/GraphCard';
//Imports
import HomeScreenImage from './images/homescreen.png'
import FollowedArtistsImage from './images/favoriteartists.png';
import UpcomingShowsLogo from './images/upcomingshows.png';
import TopCharts from './images/topcharts.png'
import configureStore from './store/configureStore';
import { allVotes } from './requests';






const navigationOptionHandler = () => ({
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
  },
  Tracks: {
    screen: TracksContainer,
    navigationOptions: navigationOptionHandler
  },
  Graph: {
    screen: GraphCard,
    navigationOptions: navigationOptionHandler
  }
  },
  {initialRouteName: 'Home'});

const MainStack = createStackNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: navigationOptionHandler
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: navigationOptionHandler
  }
}, {
  initialRouteName: 'Home'
});


const FollowedArtistStack = createStackNavigator({
  FollowedArtists: {
    screen: FollowedArtistContainer,
    navigationOptions: navigationOptionHandler
  },
  ArtistPage: {
    screen: ArtistPage,
    navigationOptions: navigationOptionHandler
  }
})

const MainTabs = createBottomTabNavigator({
  Main: {
    screen: MainStack,
    navigationOptions: ({navigation}) => {
      return {
        tabBarIcon: () => <Image source={HomeScreenImage} style={{width: 20, height: 20}} />,
        tabBarOnPress: ({navigation, defaultHandler}) => {
          navigation.navigate('Home');
          defaultHandler();
        },
      }
    }
  },
  FollowedArtists: {
    screen: FollowedArtistStack,
    navigationOptions: ({navigation}) => {
      return {
        tabBarIcon: () => <Image source={FollowedArtistsImage} style={{width: 20, height: 20}} />,
        tabBarOnPress: ({navigation, defaultHandler}) => {
          navigation.navigate('FollowedArtists');
          defaultHandler();
        },
      }
    }
  },
  UpcomingShows: {
    screen: UpcomingShows,
    navigationOptions: ({navigation}) => {
      return {
        tabBarIcon: () => <Image source={UpcomingShowsLogo} style={{width: 20, height: 20}} />,
        tabBarOnPress: ({navigation, defaultHandler}) => {
          defaultHandler();
        }
      }
    }
  },
  Charts: {
    screen: Charts,
    navigationOptions: ({navigation}) => {
      return {
        tabBarIcon: () => <Image source={TopCharts} style={{width: 20, height: 20}} />,
        tabBarOnPress: ({navigation, defaultHandler}) => {
          defaultHandler();
        }
      }
    }
  }, 
  }, {
    tabBarOptions: {
      style: {
        borderTopColor: '#2FA8F8'
      }
    }
  });

  const AppDrawer = createDrawerNavigator({
    drawer: MainTabs
  }, {
    contentComponent: GustDrawer,
    drawerWidth: Dimensions.get('window').width * 0.83
  });

  const AuthStack = createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: navigationOptionHandler
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: navigationOptionHandler
    }
  })

  const MainApp = createSwitchNavigator(

    {
    authLoading: {
      screen: AuthLoading
    },
    app: AppDrawer,
    auth: AuthStack
    },
    { initialRouteName: 'auth'}
    
  )

const Main = createAppContainer(MainApp);  

const store = configureStore();
  
  
  const Gust = () => (
      <Provider store={store}>
          <Main />
      </Provider>
  );
  
  AppRegistry.registerComponent('rncourse', () => Gust);
  

export default Gust;
