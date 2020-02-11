//React
import React from 'react';
import { View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { connect } from 'react-redux';
//Components
import AuthHeader from './AuthHeader';
import LoginForm from './LoginForm';
import AuthLoading from './AuthLoading';
//Images
import LogoPicture from '../../images/gustlogo.jpg';
//Stylesheet
import { styles } from '../../stylesheet';
//Imports
import { login } from '../../requests';

const Login = ({navigation, loading, loadingScreen, addingUser}) => {

    const handleLoginSubmit = (user) => {
        if (user.username && user.password) {
            loadingScreen()
            login(user)
            .then(obj => {
                if (obj.error) {
                    Alert.alert(obj.error)
                } else {

                    addingUser(obj.user, obj.jwt);
                    navigation.navigate('authLoading'); 
                }
                
            })
            
        } else {
            Alert.alert('Something is blank...')
        }     
    }

    return(
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    
        <View style={{flex: 1}}>    
       
            <AuthHeader />

            <>
            {loading ? <AuthLoading /> :
                <LoginForm navigation={navigation} 
                handleLoginSubmit={handleLoginSubmit}
                styles={styles} LogoPicture={LogoPicture}  />
            }
            </>
        

        </View>

    </TouchableWithoutFeedback>
    )
}

const msp = state => {
    return {
        loading: state.isLoading,
    }
}

const mdp = dispatch => {
    return {
        loadingScreen: () => dispatch({type: 'LOADING_USER'}),
        addingUser: (user, jwt) => dispatch({type: 'ADD_USER', user, jwt})
    }
}

export default connect(msp, mdp)(Login);