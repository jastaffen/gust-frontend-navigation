//React
import React, {useState} from 'react';
import { View, Text, TouchableHighlight, Image, Dimensions } from 'react-native';
//imports
import UpVoted from '../../images/upvoted.png';
import UpVote from '../../images/upvote.png';

const width = Dimensions.get('window').width;


const TrackCard = ({track}) => {

    const [isClicked, setIsClicked] = useState(false);

    return(
        
        <View style={{flex: 1, alignSelf: 'stretch', backgroundColor: 'black', borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 30, width: width}} key={track.id}>
            <View style={{flexDirection: 'row'}}>

                <TouchableHighlight onPress={() => setIsClicked(!isClicked)}><Image source={isClicked ? UpVoted : UpVote} style={{width: 40, height: 20}} /></TouchableHighlight>
                <Text style={{color: 'white', textAlign: 'center', fontSize: 12}}>{track.name.replace('- Remastered', '')}</Text>

            </View>

            <Text style={{color: 'white', textAlign: 'center', padding: 5}}>{isClicked ? '1' : '0'}</Text>
                        
        </View>
    )
}

export default TrackCard;