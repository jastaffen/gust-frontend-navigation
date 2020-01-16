import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const AuthHeader = () => {

    return(
        <View style={{flex: 1, top: 80}} >
            <Text style={headerStyles.sloganText}>FOR THE REAL FANS</Text>
            <Text style={headerStyles.mainText}>GUST</Text>
        </View>
    )
}

const headerStyles = StyleSheet.create({
    sloganText: {
        color: '#2FA8F8',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    mainText: {
        color: '#2FA8F8',
        margin: 30,
        fontSize: 60,
        textAlign: 'center'
    }
})

export default AuthHeader;