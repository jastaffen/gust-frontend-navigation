//React
import React from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View,} from 'react-native';
//imports
import { styles } from '../stylesheet';

const Loader = () => {
    return (
        <>
          
          <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
            <ActivityIndicator size="large" style={styles.authLoader} color="#2FA8F8" />
            <StatusBar barStyle="default" />
          </View> 
    
        </>
        );
    
}

export default Loader;
