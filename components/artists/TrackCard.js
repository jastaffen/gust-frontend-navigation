//React
import React, {useState} from 'react';
import { View, Text, TouchableHighlight, Image, Dimensions } from 'react-native';
//imports
import UpVoted from '../../images/upvoted.png';
import UpVote from '../../images/upvote.png';

const width = Dimensions.get('window').width;


const TrackCard = ({track}) => {
    

    const [isClicked, setIsClicked] = useState(false);

    const handleVotePress = () => {
        console.log('hi')
    }

    return(
        
        <View style={{flex: 1, alignSelf: 'stretch', backgroundColor: 'black', borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 30, width: width}} key={track.id}>
            <View style={{flexDirection: 'row'}}>

                <TouchableHighlight onPress={handleVotePress}><Image source={isClicked ? UpVoted : UpVote} style={{width: 40, height: 20}} /></TouchableHighlight>
                <Text style={{color: 'white', textAlign: 'center', fontSize: 12}}>{track.name}</Text>

            </View>

            <Text style={{color: 'white', textAlign: 'center', padding: 5}}>{track.votes.length}</Text>
                        
        </View>
    )
}

export default TrackCard;