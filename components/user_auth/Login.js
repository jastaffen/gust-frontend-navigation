//React
import React, {useState} from 'react';
import { View, TextInput, Alert, Image, Button, Text } from 'react-native';
//Components
import AuthHeader from './AuthHeader';
//Images
import LogoPicture from '../../images/gustlogo.jpg';
//Stylesheet
import { styles } from '../../stylesheet';
//Imports
import { login } from '../../requests';

const Login = ({navigation}) => {
    
    const [user, setUser] = useState({
        username: null,
        password: null
    })

    const [userData, setUserData] = useState(null)

    const handleLoginSubmit = () => {
        if (user.username && user.password) {
            login(user)
            .then(obj => {
                if (obj.error) {
                    Alert.alert(obj.error)
                } else {
                    setUserData({
                        firstName: obj.user.firstName,
                        lastName: obj.user.lastName,
                        username: obj.user.username,
                        city: obj.user.city,
                        country: obj.user.country,
                        jwt: obj.jwt
                    })
                    navigation.navigate('app', { userData: userData })
                }
            })
        } else {
            Alert.alert('Something is blank...')
        }   
    }

    return(

    <View style={{flex: 1}}>    

        <AuthHeader />

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            <TextInput style={styles.input} autoCapitalize='none' textContentType="username" placeholder="username" onChangeText={(e) => setUser({...user, username: e})} onSubmitEditing={handleLoginSubmit} />
            <TextInput style={styles.input} autoCapitalize='none' secureTextEntry={true} placeholder="password" onChangeText={(e) => setUser({...user, password: e})} onSubmitEditing={handleLoginSubmit} />

            
            <Button color={'#106AA1'} style={styles.button} title="Log In!" onPress={handleLoginSubmit} />
            <Button title="don't have an account?" onPress={() => navigation.navigate('SignUp')} />
            
        </View>

        <View style={{top: -20, alignSelf: 'center'}}>
            <Image source={LogoPicture} style={{resizeMode: 'contain', width: 180, height: 180}} />
        </View>

    </View>

    )
}


export default Login;