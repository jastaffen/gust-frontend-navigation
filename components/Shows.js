//React
import React, {useState, useEffect} from 'react';
import { FlatList, TouchableOpacity, SafeAreaView, Image, View, Text, Dimensions } from 'react-native';
//Components
import SearchForShow from './SearchForShow';
//Imports
import UpcomingShowsLogo from '../images/upcomingshows.png';
import { styles } from '../stylesheet';
import { Linking } from 'expo'


const width = Dimensions.get('window').width

const Shows = ({upcomingShows}) => {

    useEffect(() => {
        upcomingShows
    }, [upcomingShows])
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const handleDates = (date) => {
        let newDate;
        let dateArr = date.split('-');
        let month = parseInt(dateArr[1].replace(/^0+/, ''));
        
        month === 1 ? newDate = months[months.length - 1] : newDate = months[month -1];
        newDate += ` ${dateArr[2]}, ${dateArr[0]}`;
        return newDate
    }


    return (

    <>      

        <SafeAreaView style={{flex: 5, justifyContent: 'center', alignSelf: 'center', top: 90, height: 555}}>
            
            <FlatList horizontal={false} showsVerticalScrollIndicator={false} data={upcomingShows} style={{flexDirection: 'column'}} numColumns={2} contentContainerStyle={{paddingBottom: 20}} renderItem={({item}) => (

                <TouchableOpacity style={{borderWidth: 2, borderColor: '#2FA8F8', borderRadius: 10, margin: 5, width: 150, justifyContent: 'center', alignItems: 'center', padding: 20}}
                onLongPress={() => Linking.openURL(item.uri)}>
                    <Text>{handleDates(item.start.date)}</Text>
                    <Image source={UpcomingShowsLogo} style={{width: 60, height: 60}} />
                    <Text style={{fontSize: 10}}>{item.venue.displayName === 'Unknown venue' ? item.displayName : item.venue.displayName }</Text>
                    <Text style={{fontSize: 9, marginTop: 5, fontWeight: 'bold'}}>{item.location.city}</Text>
                </TouchableOpacity>

                )} />

        </SafeAreaView>
        

    </>

    )
}

export default Shows;