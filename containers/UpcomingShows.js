//React
import React, {useState, useEffect} from 'react';
import { View, Text, TouchableHighlight, Alert, SafeAreaView, FlatList, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
//Components
import Header from '../components/Header';
import Loader from '../components/Loader';
import Shows from '../components/Shows';
import SearchForShow from '../components/SearchForShow';
import ShowArtistProfile from '../components/ShowArtistProfile';
//imports
import { styles } from '../stylesheet';
import { getArtistSongKickId } from '../requests';
import sk from '../images/sk-badge-black.png'

const UpcomingShows = ({navigation, follows}) => {

    const [upcomingShows, setUpcomingShows] = useState(null);
    const [activeButton, setActiveButton] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedArtist, setSelectedArtist] = useState(null);
    

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

    const handleUpcomingShowButtonPress = (artist, id) => {
        setActiveButton(id);
        setIsLoading(true)
        getArtistSongKickId(artist.artistName)
        .then(obj => {
            if (obj.onTourUntil === null) {
                setIsLoading(false)
                Alert.alert(`Sorry... it appears ${name} has no upcoming shows`);
                setUpcomingShows(null)
            } else {
                setIsLoading(false)
                setUpcomingShows(obj.resultsPage.results.event);
                setSelectedArtist(artist);
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

    <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
        <>
            
            <Header navigation={navigation} title={'Upcoming Shows'} />

            <Text style={{top: 35, left: 5, color: '#2FA8F8', fontSize: 15}}>Artists you follow</Text>
        {
            follows.length > 0 ? 
        <>
            <View style={styles.upcomingShowsContainer}>

                
                <SafeAreaView style={{flex: 1, top: 60, height: 200, borderBottomWidth: 1, borderBottomColor: 'blue'}}>
                    <FlatList showsVerticalScrollIndicator={false} horizontal={false} data={follows} contentContainerStyle={{paddingBottom: 15}}  renderItem={({item}) => (
                        <TouchableHighlight  key={item.id} id={item.id} activeOpacity={0.3} style={activeButton === item.id ? styles.upcomingShowsButtonActive : styles.upcomingShowsButtonInactive} underlayColor={'#2FA8F8'}  onPress={() => handleUpcomingShowButtonPress(item, item.id)}>
                            <View style={{flexDirection: 'row'}}>
                                <Image source={{uri: item.smallImage}} style={{width: 60, height: 60}} />
                                <Text style={activeButton === item.id ? {top: 10, left: 5, fontSize: 18, color: 'white'} : {top: 10, left: 5, fontSize: 18, color: '#2FA8F8'}}>{item.artistName}</Text>
                            </View>
                        </TouchableHighlight>
                    )} />
                </SafeAreaView>

            </View> 
            
            

            { isLoading ? <Loader /> :

            <View style={{flex: 1, top: -60, zIndex: 10000000,}}>
            
                { upcomingShows && selectedArtist ? 
                <> 
                    <View style={{flexDirection: 'row'}}>
                        <ShowArtistProfile selectedArtist={selectedArtist} />
                        <View style={{left: -200}}>
                            <View style={{flex: 1, position: 'absolute', top: 270, borderWidth: 1}}>
                                <SearchForShow searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} />
                            </View>
                            {renderUpcomingShows()} 
                        </View>
                    </View>
                    
                    
                </> 
                : null}
                
            </View>  }

            <View style={{bottom: 6}}>
                <Image source={sk} style={{width: 15, height: 15, opacity: 0.6}} />
            </View>
        </>

        :

        <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center', width: 300}}>
            <Text style={{textAlign: 'center', color: 'blue', fontSize: 18}}>
            You haven't followed any artists yet. Search for artists and 
            follow them!</Text>
        </View>

            }
        </>
    </TouchableWithoutFeedback> 
    )
}

const msp = state => {

    return {
        follows: state.follows.follows
    }
    
}

export default connect(msp)(UpcomingShows);