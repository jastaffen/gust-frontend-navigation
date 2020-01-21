//React
import React from 'react';
import { SafeAreaView, ScrollView, Text, Button, View } from 'react-native';


const GustDrawer = ({navigation}) => {

    return(
      <SafeAreaView style={{flex: 1}}>

        <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Username Here</Text>
        </View>

        <ScrollView>
          <Button title="Home" onPress={() => navigation.navigate('Home')} />
          <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
          <Button title="x" onPress={() => navigation.closeDrawer()} />
        </ScrollView>

        <View>
            <Button title="logout" onPress={() => navigation.navigate('auth')} />
        </View>
        
      </SafeAreaView>
    )

}

export default GustDrawer;