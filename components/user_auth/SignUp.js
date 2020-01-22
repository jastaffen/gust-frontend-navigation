//React
import React, {useState} from 'react';
import { View, TextInput, Text, Picker, StyleSheet, Button, Alert, Image } from 'react-native';
import { connect } from 'react-redux';
//Components
import AuthHeader from './AuthHeader';
//Imports
import countries from '../../constants/countries.js';
import LogoPicture from '../../images/gustlogo.jpg';
import { signUp } from '../../requests';

const SignUp = ({navigation, addUser}) => {

    const [user, setUser] = useState({
        firstName: null,
        lastName: null,
        username: null,
        password: null
    });

    // const [userData, setUserData] = useState(null)

    const [nextPress, setNextPress] = useState(false);

    const [city, setCity] = useState(null);
    const [country, setCountry] = useState('AD');

    const handleNextPress = () => {
        if (user.firstName && user.lastName && user.username && user.password) {
            setNextPress(true)
        } else {
            Alert.alert('You Must Fill in Blank Forms To Complete')
        }
    }

    const handleSubmit = () => {
        if (city) {
            signUp(user, city, country)
            .then(obj => {
                if (obj.error) {
                    Alert.alert(obj.error)
                } else {
                    Alert.alert(`You've successfully created an account!`)
                    addUser(obj.user, obj.jwt);
                    navigation.navigate('app');
                }
            })
        } else {
            Alert.alert('please enter a city')
        }
    }

    // const navigateToHome = (userData) => {
    //     if (userData) {
    //         navigation.navigate('Home', {userData: userData})
    //     }
    // }

    // const onPressYes = () => {
    //     setHasLocationPermission(true);
    //     if (hasLocationPermission) {
    //         getLocation()
    //     }
    // }

    // const getLocation = () => {
    //     Geolocation.getCurrentPosition(
    //         (position) => {
    //             console.log(position);
    //         },
    //         (error) => {
    //             // See error code charts below.
    //             console.log(error.code, error.message);
    //         },
    //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    //     );
    // }

    // const handleLocationServicePermission = () => {
    //     return (
    //         <View style={{position: 'absolute', top: -100, alignSelf: 'center'}}>
    //             <Image source={LogoPicture} style={{resizeMode: 'contain', width: 170, height: 170}} />
    //             <Text>Gust would like to access your location</Text>
    //             <Button title="yes" onPress={onPressYes} />
    //             <Button title="no" onPress={onPressNo} />
    //         </View>
    //     )
    // }

    return(

    <View style={{flex: 1}}>
        <AuthHeader />
        <View style={{top: 15, justifyContent: 'center', alignItems: 'center'}}>

        { nextPress ? 

        <>
            <View style={{position: 'absolute', top: -100, alignSelf: 'center'}}>
                    <Image source={LogoPicture} style={{resizeMode: 'contain', width: 170, height: 170}} />
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>

                <View style={{top: -10, width: 125, justifyContent: 'center', margin: 35}}>
                    <Text style={{padding: 30, width: 200, fontSize: 16, color: '#2FA8F8', fontWeight: 'bold'}}>Almost Done!...</Text>
                    <TextInput autoCapitalize="words" style={styles.name} placeholder="nearest city..." value={city} onChangeText={(e) => setCity(e)} />
                </View>

                <View style={{top: -8, width: 125, justifyContent: 'center', margin: 35}}>

                    <Text style={{top: 70, alignSelf: 'center'}}>Select a Country:</Text>
                    <Picker style={{width: 100}} itemStyle={{fontSize: 10, fontWeight: 'bold', textAlign: 'center'}} selectedValue={country} onValueChange={(itemValue, itemIndex) => setCountry(itemValue)} mode="dropdown"> 
                        {countries.map(cntry => <Picker.Item key={cntry.code} label={cntry.name} value={cntry.code} />)}
                    </Picker>

                </View>

            </View> 

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