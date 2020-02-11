//React
import React, {useState, useEffect} from 'react';
import { FlatList, SafeAreaView, View, Text, Alert, RefreshControl } from 'react-native';
import { connect } from 'react-redux'
//Components
import Header from '../components/Header';
import Loader from '../components/Loader';
//imports
import { allVotes } from '../requests';
import { styles } from '../stylesheet';

const Charts = ({navigation, tracks}) => {

    const [topVotes, setTopVotes] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    
     useEffect(() => {

        allVotes()
        .then(obj => {
            if (obj.error) {
                Alert.alert('something went wrong')
            } else {
                let sortedVotes = obj.votes.sort((objA, objB) => objB.vote.voteCount - objA.vote.voteCount)                
                setTopVotes(sortedVotes);
                console.log('state changed 1')
            }
        }
         
     )}, [])

    const handleRefresh = async () => {
        setRefreshing(true);
        await allVotes()
        .then(obj => {
            if (obj.error) {
                Alert.alert('something went wrong')
            } else {
                let sortedVotes = obj.votes.sort((objA, objB) => objB.vote.voteCount - objA.vote.voteCount)                
                setTopVotes(sortedVotes);
                setRefreshing(false)
            }
        })
    }

    return (

        <View style={{flex: 1}}>

            <Header navigation={navigation} title={'Top Charts'} />

            <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', top: 40}}>
                {topVotes ? 
                <FlatList data={topVotes} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 40}} keyExtractor={item => item.vote.songName} renderItem={({item}) => (

                    <View style={styles.trackCard}>

                        <Text style={{color: 'white', textAlign: 'center', fontSize: 12}}>{item.vote.songName} by {item.vote.artistName}</Text>

                        <View>
                            <Text style={{color: 'white', textAlign: 'center', padding: 5}}>{item.vote.voteCount}</Text>
                        </View>

                    </View>

                )} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />} /> : <Loader />}

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