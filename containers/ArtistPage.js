//React
import React from 'react';
import { View, Text, Button } from 'react-native'
//Components
import Header from '../components/Header';

const ArtistPage = ({navigation}) => {

    return(
        <View style={{flex: 1}}>
            <Header navigation={navigation} />
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <Text style={{fontSize: 40, color: 'blue'}}>Hi</Text>
                <Button title="Submit Artist" />
            </View>
        </View>
    )
}

export default ArtistPage;