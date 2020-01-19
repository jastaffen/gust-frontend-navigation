//React
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const AuthLoading = () => {
    return(
        <View style={{flex: 1}}>
            <ActivityIndicator size="large" color="#2FA8F8" />
        </View>
    )
}

export default AuthLoading;