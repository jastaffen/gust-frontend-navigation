//React
import React from 'react';
import { View, Text, Button, TextInput } from 'react-native'
//Components
import Header from '../components/Header';
import SearchArtist from '../components/SearchArtist';

const HomePage = ({navigation}) => {

    return(
        
      <View style={{flex: 1}}>

        <Header navigation={navigation} />

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            <SearchArtist navigation={navigation} />

        </View>
      </View>
    )

  }

export default HomePage;