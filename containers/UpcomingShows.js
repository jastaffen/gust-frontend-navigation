//React
import React, {useState, useEffect} from 'react';
import { View, TextInput, Text, TouchableHighlight, Alert, SafeAreaView, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
//Components
import Header from '../components/Header';
import Shows from '../components/Shows';
import Loader from '../components/Loader';
//imports
import { styles } from '../stylesheet';
import { getArtistSongKickId } from '../requests';
import sk from '../images/sk-badge-black.png'

const UpcomingShows = ({navigation, follows}) => {

    const [upcomingShows, setUpcomingShows] = useState(null);
    const [activeButton, setActiveButton] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    // const [searchText, setSearchText] = useState(null);
    

    useEffect(() => {
        follows
        setActiveButton(null)
        setUpcomingShows(null)
    }, [])

    useEffect(() => {
        follows
        setActiveButton(null)
        setUpcomingShows(null)
    }, [follows])

    // const handleSearchText = text => {
    //     setSearchText(text);
    //     if (upcomingShows) {
    //         let showsToDisplay = [...upcomingShows]
    //         setUpcomingShows(showsToDisplay.filter(show => show.location.city.toLowerCase().includes(searchText.toLowerCase())));
    //     }
    // }

    const handleUpcomingShowButtonPress = (name, id) => {
        setActiveButton(id);
        setIsLoading(true)
        getArtistSongKickId(name)
        .then(obj => {
            if (obj.onTourUntil === null) {
                setIsLoading(false)
                Alert.alert(`Sorry... it appears ${name} has no upcoming shows`);
                setUpcomingShows(null)
            } else {
                setIsLoading(false)
                setUpcomingShows(obj.resultsPage.results.event);
            }
        })
    }

    return(

        <View style={{flex: 1}}>
        
            <Header navigation={navigation} />


            <View style={styles.upcomingShowsContainer}>


                <SafeAreaView style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', top: 60, height: 200}}>
                    <FlatList horizontal={false} style={{flexDirection: 'column'}} numColumns={2} data={follows} renderItem={({item}) => (
                        <TouchableHighlight  key={item.id} id={item.id} activeOpacity={0.3} style={activeButton === item.id ? styles.upcomingShowsButtonActive : styles.upcomingShowsButtonInactive} underlayColor={'#2FA8F8'}  onPress={() => handleUpcomingShowButtonPress(item.artistName, item.id)}>
                        <Text style={{fontSize: 14}}>{item.artistName}</Text>
                    </TouchableHighlight>
                    )} />
                </SafeAreaView>

            </View> 
            
            {/* <View style={{position: 'absolute', width: 200, top: 280, alignSelf: 'center', zIndex: 1000}}>
                <TextInput style={{backgroundColor: 'white', borderWidth: 1, height: 40}} value={searchText} onChangeText={(text) => handleSearchText(text)} />
            </View>   */}

            { isLoading ? <Loader /> :

            <View style={{flex: 1, top: -60, position: 'relative'}}>
            
                { upcomingShows ? <Shows upcomingShows={upcomingShows} /> : null}

            </View>  }

            <View style={{alignItems: 'center', bottom: 10}}>
                <Image source={sk} style={{width: 20, height: 20}} />
            </View>
        </View>
    )
}

const msp = state => {

    return {
        follows: state.follows.follows
    }
    
}

export default connect(msp)(UpcomingShows);