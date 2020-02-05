//React
import React, {useState, useEffect} from 'react';
import { View, Text, TouchableHighlight, Alert, SafeAreaView, FlatList, Image, Keyboard } from 'react-native';
import { connect } from 'react-redux';
//Components
import Header from '../components/Header';
import Loader from '../components/Loader';
import Shows from '../components/Shows';
import SearchForShow from '../components/SearchForShow';
//imports
import { styles } from '../stylesheet';
import { getArtistSongKickId } from '../requests';
import sk from '../images/sk-badge-black.png'

const UpcomingShows = ({navigation, follows}) => {

    const [upcomingShows, setUpcomingShows] = useState(null);
    const [activeButton, setActiveButton] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    

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

    const handleSearchTermChange = (text) => {
        setSearchTerm(text);
    }

    const renderUpcomingShows = () => {

        let showsToDisplay = [...upcomingShows];

        if (searchTerm) {
            showsToDisplay = showsToDisplay.filter(show => show.location.city.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        return <Shows upcomingShows={showsToDisplay} />

    }

    return(

        <View style={{flex: 1}} onPress={Keyboard.dismiss}>
            
            <Header navigation={navigation} />
        
        {
            follows.length > 0 ? 
        <>
            <View style={styles.upcomingShowsContainer}>


                <SafeAreaView style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', top: 60, height: 200, borderBottomWidth: 1, borderBottomColor: 'black'}}>
                    <FlatList showsVerticalScrollIndicator={false} horizontal={false} style={{flexDirection: 'column'}} numColumns={2} data={follows}  renderItem={({item}) => (
                        <TouchableHighlight  key={item.id} id={item.id} activeOpacity={0.3} style={activeButton === item.id ? styles.upcomingShowsButtonActive : styles.upcomingShowsButtonInactive} underlayColor={'#2FA8F8'}  onPress={() => handleUpcomingShowButtonPress(item.artistName, item.id)}>
                        <Text style={activeButton === item.id ? {fontSize: 14, color: '#7AC6F9'} : {fontSize: 14, color: '#2FA8F8'}}>{item.artistName}</Text>
                    </TouchableHighlight>
                    )} />
                </SafeAreaView>

            </View> 
            
            

            { isLoading ? <Loader /> :

            <View style={{flex: 1, top: -60, zIndex: 10000000,}}>
            
                { upcomingShows ? 
                <> 
                    {renderUpcomingShows()} 
                    <View style={{flex: 1, position: 'absolute', top: 270, borderWidth: 1, justifyContent: 'center', alignContent: 'center', alignSelf: 'center'}}>
                        <SearchForShow searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} />
                    </View>
                </> 
                : null}
                
            </View>  }

            <View style={{alignItems: 'center', bottom: 10}}>
                <Image source={sk} style={{width: 20, height: 20}} />
            </View>
        </>

        :

        <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center', width: 300}}>
            <Text style={{textAlign: 'center', color: 'blue', fontSize: 18}}>
            You haven't followed any artists yet. Search for artists and 
            follow them!</Text>
        </View>

            }
        </View> 
    )
}

const msp = state => {

    return {
        follows: state.follows.follows
    }
    
}

export default connect(msp)(UpcomingShows);