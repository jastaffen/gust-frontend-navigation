//React
import React, {useState} from 'react';
import { View, TextInput, Text, Picker, StyleSheet, Button, Alert, Image } from 'react-native';
import { connect } from 'react-redux';
//Components
import AuthHeader from './AuthHeader';
import SignUpForm from './SignUpForm';
//Imports
import countries from '../../constants/countries.js';
import LogoPicture from '../../images/gustlogo.jpg';
import { signUp, reverseGeolocation } from '../../requests';


const SignUp = ({navigation, addUser}) => {

    const geoOptions = { enableHighAccuracy: true, timeOut: 2000, maximumAge: 60 * 60 }

    const [user, setUser] = useState({
        firstName: null,
        lastName: null,
        username: null,
        password: null
    });
    const [nextPress, setNextPress] = useState(false);
    const [city, setCity] = useState(null);
    const [state, stateSet] = useState(null);
    const [country, setCountry] = useState(null);
    const [ready, setReady] = useState(false);
    const [error, setError] = useState(null);

    handleUserChange = (e, string) => {  
        setUser({...user, [string]: e})
    }

    const handleNextPress = () => {

        if (user.firstName && user.lastName && user.username && user.password) {

            Alert.alert('Location Permissions', 'Gust would like to access your location', [
                {text: "No", onPress: () => handleSubmit(), style: 'cancel'},
                {text: 'Yes', onPress: () => findLocation()}
            ])

        } else {

            Alert.alert('You Must Fill in Blank Forms To Complete')

        }
    }

    const findLocation = () => {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoFailure, geoOptions);
    }

    const geoSuccess = (position) => {

        setReady(true);

        reverseGeolocation(position.coords.latitude, position.coords.longitude)
        .then(obj => {
            handleSubmit(obj.results[0].address_components[3].long_name, obj.results[0].address_components[5].long_name, obj.results[0].address_components[6].long_name);
        })

    }
    
    const geoFailure = (error) => {
        setError(error.message);
        console.log(error)
    }
 
    const handleSubmit = (city=null, state=null, country=null) => {

        signUp(user, city, state, country)
        .then(obj => {
            if (obj.error) {
                Alert.alert(obj.error)
            } else {
                Alert.alert(`You've successfully created an account!`)
                addUser(obj.user, obj.jwt);
                navigation.navigate('authLoading');
            }
        })

    }
    
    return(
    
    <View style={{flex: 1}}>

        <AuthHeader />

        <View style={{top: 15, justifyContent: 'center', alignItems: 'center'}}>

        { nextPress ? 

        <>
            <View style={{position: 'absolute', top: -100, alignSelf: 'center'}}>
                    <Image source={LogoPicture} style={{resizeMode: 'contain', width: 170, height: 170}} />
            </View>

            {/* where deleted old location form was located */}

            <View style={{top: -20}}>
                <Button title="SUBMIT!" buttonStyle={{borderRadius: 10, borderWidth: 1, borderColor: '#2FA8F8', padding: 5}} onPress={handleSubmit} />
            </View>

        </>
        
        :  

        <>
            <SignUpForm user={user} handleNextPress={handleNextPress} 
            handleUserChange={handleUserChange} LogoPicture={LogoPicture} />

            <View style={{top: -50}}>
                <Button title="already have an account?" onPress={() => navigation.navigate('Login')} />
            </View>

        </>
        }

        </View> 
    </View>
    
    )
};

const mdp = dispatch => {
    return {
        addUser: (user, jwt) => dispatch({type: 'ADD_USER', user, jwt})
    }
}

export default connect(null, mdp)(SignUp);

