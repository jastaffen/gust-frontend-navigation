//React
import React, {useState, useEffect} from 'react';
import { FlatList, SafeAreaView, View, Text, Alert } from 'react-native';
import { connect } from 'react-redux'
//Components
import Header from '../components/Header';
import Loader from '../components/Loader';
//imports
import { allVotes } from '../requests';
import { styles } from '../stylesheet';

const Charts = ({navigation, tracks}) => {

    const [topVotes, setTopVotes] = useState(null);

    useEffect(() => {
        allVotes()
        .then(obj => {
            if (obj.error) {
                Alert.alert('something went wrong')
            } else {
                let sortedVotes = obj.votes.sort((objA, objB) => objB.vote.voteCount - objA.vote.voteCount)
                setTopVotes(sortedVotes)
            }
        }
         
     )}, [])

     useEffect(() => {
        allVotes()
        .then(obj => {
            if (obj.error) {
                Alert.alert('something went wrong')
            } else {
                let sortedVotes = obj.votes.sort((objA, objB) => objB.vote.voteCount - objA.vote.voteCount)
                setTopVotes(sortedVotes)
            }
        }
         
     )}, [tracks])

    return(
        <View style={{flex: 1}}>
            <Header navigation={navigation} />

            <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', top: 40}}>
                <Text style={{fontSize: 18, marginBottom: 10, color: '#2FA8F8'}}>THE CHARTS</Text>
                {topVotes ? 
                <FlatList data={topVotes} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 40}} keyExtractor={item => item.vote.songName} renderItem={({item}) => (

                    <View style={styles.trackCard}>

                        <Text style={{color: 'white', textAlign: 'center', fontSize: 12}}>{item.vote.songName} by {item.vote.artistName}</Text>

                        <View>
                            <Text style={{color: 'white', textAlign: 'center', padding: 5}}>{item.vote.voteCount}</Text>
                        </View>

                    </View>

                )} /> : <Loader />}

            </SafeAreaView>

        </View>
    )
}

const msp = state => {
    return {
        tracks: state.spotify.tracks
    }
}

export default connect(msp)(Charts);