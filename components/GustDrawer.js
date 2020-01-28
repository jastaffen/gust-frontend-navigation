//React
import React from 'react';
import { SafeAreaView, ScrollView, Text, Button, View } from 'react-native';
import { connect } from 'react-redux';
//imports
import { styles } from '../stylesheet';

const GustDrawer = ({navigation, username}) => {

    return(
      <SafeAreaView style={{flex: 1}}>

        <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.mainText}>{username}</Text>
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

const msp = state => {
  return {
    username: state.userAuth.user.username
  }
}

export default connect(msp)(GustDrawer);