//React
import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, Button, View } from 'react-native';
//Components
import EditProfileForm from './user_auth/EditProfileForm';
//Imports
import Header from './Header';

const EditProfile = ({navigation}) => {

    return(
      <View style={{flex: 1}}>
      
        <Header navigation={navigation} isHome={true} />
        <Text style={{top: 40, textAlign: 'center', color: '#6769F8', fontSize: 30, textDecorationLine: "underline",}}>EDIT PROFILE</Text>

        <View style={{flex: 1, justifyContent: 'center'}}>
            <EditProfileForm />
        </View>

      </View>
    )
}

export default EditProfile;