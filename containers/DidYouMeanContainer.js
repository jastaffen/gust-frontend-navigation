//React
import React from 'react';
import { View, Text, Button } from 'react-native'
//Components


const DidYouMeanContainer = ({navigation}) => {
    return(
  
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
          <Text style={{fontSize: 40, color: 'blue'}}>DID YOU MEAN?</Text>
          <Button title="Submit Artist" onPress={() => navigation.navigate('Artist')} />
        </View>
  
      </View>
  
    ) 
  }

export default DidYouMeanContainer;