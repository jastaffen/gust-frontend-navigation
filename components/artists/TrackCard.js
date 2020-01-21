//React
import React, {useState, useEffect} from 'react';
import { View, Text, TouchableHighlight, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
//imports
import UpVoted from '../../images/upvoted.png';
import UpVote from '../../images/upvote.png';
import { vote, deleteVote } from '../../requests'; 


const width = Dimensions.get('window').width;


const TrackCard = ({track, selectedArtist, userData, albumName, addVote, deleteUserVote}) => {

    const [isClicked, setIsClicked] = useState(false);
    const [voteCount, setVoteCount] = useState(track.votes.length)

    useEffect(() => {
        track.votes.map(vote => {
            if (vote.userId === userData.user.id) {
                setIsClicked(true)
            }
        })
    }, [])


    const handleVotePress = () => {
        if (selectedArtist.artistName) {
            if (!isClicked) {
                vote(selectedArtist.artistName, selectedArtist.apiArtistId, track.name, track.id, albumName, userData.user.id, userData.jwt)
                .then(obj => {
                    addVote(track, obj.vote);
                    setIsClicked(true);
                    setVoteCount(track.votes.length)
                })
            } else {
                let voteToDelete = track.votes.find(vote => vote.userId === userData.user.id);
                deleteVote(voteToDelete.id, userData.jwt);
                deleteUserVote(track, voteToDelete);
                setIsClicked(false);
                setVoteCount(track.votes.length)
            }
        } else {
            if (!isClicked) {
                vote(selectedArtist.name, selectedArtist.id, track.name, track.id, albumName, userData.user.id, userData.jwt)
                .then(obj => {
                    addVote(track, obj.vote);
                    setIsClicked(true);
                    setVoteCount(track.votes.length)
                })
            } else {
                let voteToDelete = track.votes.find(vote => vote.userId === userData.user.id);
                deleteVote(voteToDelete.id, userData.jwt);
                deleteUserVote(track, voteToDelete);
                setIsClicked(false);
                setVoteCount(track.votes.length)
            } 
        }
        
    }

    return(
        
        <View style={{flex: 1, alignSelf: 'stretch', backgroundColor: 'black', borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 30, width: width}} key={track.id}>
            <View style={{flexDirection: 'row'}}>

                <TouchableHighlight onPress={handleVotePress}><Image source={isClicked ? UpVoted : UpVote} style={{width: 40, height: 20}} /></TouchableHighlight>
                <Text style={{color: 'white', textAlign: 'center', fontSize: 12}}>{track.name}</Text>

            </View>

            <Text style={{color: 'white', textAlign: 'center', padding: 5}}>{voteCount}</Text>
                        
        </View>
    )
}

const msp = state => {
    return {
        userData: state.userAuth,
        selectedArtist: state.spotify.selectedArtist
    }
}

const mdp = dispatch => {
    return {
        // addVote: (track, vote) => dispatch({type: 'ADD_VOTE', track, vote}),
        deleteUserVote: (track, vote) => dispatch({type: 'DELETE_VOTE', track, vote})
    }
}

export default connect(msp,mdp)(TrackCard);