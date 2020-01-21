//React
import React, {useState} from 'react';
import { View, TextInput, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';
//Imports
import { styles } from '../../stylesheet';


const EditProfileForm = ({username}) => {

    const [editUsername, setUsername] = useState(username)


    return(

        <View style={{alignItems: 'center', top: -130}}>
            <View style={{flexDirection: 'column'}}>
                <View>
                    <Text style={{fontSize: 16, textAlign: 'center', color: '#2FA8F8'}}>Change username:</Text>
                    <TextInput style={[styles.input, {width: 200}]} placeholder="change username" value={editUsername} onChange={(text) => setUsername(text)} />
                </View>
                <View>
                    <Text>Change City:</Text>
                    <TextInput style={styles.input} />
                </View>
                
            </View>
            
        </View>

    )
}

const msp = state => {
    return {
        username: state.userAuth.user.username
    }
}

export default connect(msp)(EditProfileForm);