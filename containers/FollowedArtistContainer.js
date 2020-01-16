//React
import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, Button, View, Image } from 'react-native';
//Components
import Header from '../components/Header'


const FollowedArtistContainer = ({navigation}) => {
    return(

    <View style={{flex: 1}}>

        <Header navigation={navigation} />

        <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'blue', fontSize: 40}}>Hi</Text>
        </View>
    
    </View>
    )
  }

export default FollowedArtistContainer;