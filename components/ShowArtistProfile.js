//React 
import React from 'react';
import { View, Text, Image, Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native'

const ShowArtistProfile = ({selectedArtist}) => {
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{top: 40}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: Dimensions.get('window').width}}>
                    <Text style={{fontSize: 20, margin: 10, color: '#2585C4'}}>{selectedArtist.artistName}</Text>
                    <Text style={{fontSize: 20, margin: 10, color: '#2585C4'}}>Shows</Text>
                </View>
                <Image source={{uri: selectedArtist.mediumImage}} style={{width: 190, height: 190, left: -40}} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ShowArtistProfile;