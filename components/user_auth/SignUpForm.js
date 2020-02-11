//React 
import React from 'react';
import { View, TextInput, Button, Image } from 'react-native';
//imports
import { styles } from '../../stylesheet';

const SignUpForm = ({user, handleNextPress, handleUserChange, LogoPicture}) => {
    return(
        <>
            <View style={{flexDirection: 'row', top: -300, zIndex: 2}}>
                <TextInput style={styles.name} placeholder="first name" value={user.firstName} onChangeText={(text, string='firstName') => handleUserChange(text, string)} />
                <TextInput style={styles.name} placeholder="last name" value={user.lastName} onChangeText={(text, string='lastName') => handleUserChange(text, string)} />
            </View>
            <View style={{flexDirection: 'row', top: -300, zIndex: 2}}>
                <TextInput autoCapitalize='none' style={styles.name} placeholder='username' value={user.username} onChangeText={(text, string='username') => handleUserChange(text, string)} />
                <TextInput autoCapitalize='none' secureTextEntry={true} style={styles.name} placeholder='password' value={user.password} onChangeText={(text, string='password') => handleUserChange(text, string)} />
            </View>

            <View style={{flexDirection: 'column', top: -280, zIndex: 2}}>
                <Button color={'#106AA1'} title="Create Account" onPress={handleNextPress} />
            </View>

            <View style={{position: 'absolute', top: -100,  alignSelf: 'center'}}>
                <Image source={LogoPicture} style={{resizeMode: 'contain', width: 150, height: 150}} />
            </View>
        </>
    )
}

export default SignUpForm;
