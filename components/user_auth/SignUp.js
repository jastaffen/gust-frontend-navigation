//React
import React, {useState} from 'react';
import { View, TextInput, Text, Picker, StyleSheet, Button, Alert, Image } from 'react-native';
import { connect } from 'react-redux';
//Components
import AuthHeader from './AuthHeader';
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
    // const [where, setWhere] = useState({lng: null, lat: null});
    const [error, setError] = useState(null);

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

            setCity(obj.results[0].address_components[3].long_name);
            stateSet(obj.results[0].address_components[5].long_name);
            setCountry(obj.results[0].address_components[6].long_name);
            
        })

    }

    console.log(city, state, country);

    
    const geoFailure = (error) => {
        setError(error.message);
        console.log(error)
    }
 
    const handleSubmit = () => {
        signUp(user, city, country)
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
            <View style={{flexDirection: 'row', top: -300, zIndex: 2}}>
                <TextInput style={styles.name} placeholder="first name" value={user.firstName} onChangeText={(e) => setUser({...user, firstName: e})} />
                <TextInput style={styles.name} placeholder="last name" value={user.lastName} onChangeText={(e) => setUser({...user, lastName: e})} />
            </View>
            <View style={{flexDirection: 'row', top: -300, zIndex: 2}}>
                <TextInput autoCapitalize='none' style={styles.name} placeholder='username' value={user.username} onChangeText={(e) => setUser({...user, username: e})} />
                <TextInput autoCapitalize='none' secureTextEntry={true} style={styles.name} placeholder='password' value={user.password} onChangeText={(e) => setUser({...user, password: e})} />
            </View>
            <View style={{flexDirection: 'column', top: -300, zIndex: 2}}>
                <Button title="next" onPress={handleNextPress} />
            </View>

            <View style={{position: 'absolute', top: -100,  alignSelf: 'center'}}>
                <Image source={LogoPicture} style={{resizeMode: 'contain', width: 150, height: 150}} />
            </View>

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

const styles = StyleSheet.create({
    name: {
        backgroundColor: '#D8EEFC',
        color: '#6769F8',
        margin: 5,
        width: 150,
        height: 35,
        paddingHorizontal: 12,
        textAlign: 'center',
        fontSize: 16
      }
})