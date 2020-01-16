//React
import React, {useState} from 'react';
import { View, TextInput, TouchableHighlight, Text, Alert, Image } from 'react-native';
//Components
import AuthHeader from './AuthHeader';
//Imports
import LogoPicture from '../../images/gustlogo.jpg';

const Login = () => {
    
    const [user, setUser] = useState({
        username: null,
        password: null
    })

    const handleLoginSubmit = () => {
        if (user.username && user.password) {
            console.log(user)
        } else {
            Alert.alert('Something is blank...')
        }   
    }

    return(

    <View style={{flex: 1}}>    

        <AuthHeader />

        <View style={{flex: 1}}>

            <TextInput autoCapitalize='none' textContentType="username" placeholder="username" onChangeText={(e) => setUser({...user, username: e.trim()})} onSubmitEditing={handleLoginSubmit} />
            <TextInput autoCapitalize='none' secureTextEntry={true} placeholder="password" onChangeText={(e) => setUser({...user, password: e.trim()})} onSubmitEditing={handleLoginSubmit} />

            {/* <TouchableHighlight style={{alignSelf: 'center', margin: 2}} onPress={handleLoginSubmit}>
                <Text style={{color: '#3C65D7', fontSize: 15}}>Submit</Text>
            </TouchableHighlight> */}

        </View>

        <View style={{alignSelf: 'center'}}>
            <Image source={LogoPicture} style={{resizeMode: 'contain', width: 180, height: 180}} />
        </View>

    </View>

    )
}


export default Login;