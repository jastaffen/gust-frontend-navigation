//React
import React, {useState} from 'react';
import { View, TextInput, Alert, Image, Button, Text } from 'react-native';


const LoginForm = ({navigation, handleLoginSubmit, styles, LogoPicture}) => {

    const [user, setUser] = useState({
        username: null,
        password: null
    });

    

    return(
        <>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <TextInput style={styles.input} autoCapitalize='none' textContentType="username" placeholder="username" onChangeText={(e) => setUser({...user, username: e})} onSubmitEditing={() => handleLoginSubmit(user)} />
                <TextInput style={styles.input} autoCapitalize='none' secureTextEntry={true} placeholder="password" onChangeText={(e) => setUser({...user, password: e})} onSubmitEditing={() => handleLoginSubmit(user)} />
            
                <Button color={'#106AA1'} style={styles.button} title="Log In!" onPress={() => handleLoginSubmit(user)} />
                <Button title="don't have an account?" onPress={() => navigation.navigate('SignUp')} />
            
            </View>

            <View style={{top: -20, alignSelf: 'center'}}>
                <Image source={LogoPicture} style={{resizeMode: 'contain', width: 180, height: 180}} />
            </View>
        </>
    )
}

export default LoginForm;