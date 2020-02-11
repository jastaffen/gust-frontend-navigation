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

        <SafeAreaView style={{flex: 5, justifyContent: 'center', alignSelf: 'center', top: 125, height: 555, left: -10}}>
            
            <FlatList horizontal={false} showsVerticalScrollIndicator={false} data={upcomingShows} contentContainerStyle={{paddingBottom: 20}} renderItem={({item}) => (

                <TouchableOpacity style={{flex: 1, marginBottom: 10}}
                onLongPress={() => Linking.openURL(item.uri)}>
                    <Text style={{color: '#2585C4', fontSize: 12, fontWeight: 'bold'}}>{handleDates(item.start.date)}</Text>
                    <Text style={{color: '#2FA8F8', fontSize: 12}}>{item.venue.displayName === 'Unknown venue' ? item.displayName : item.venue.displayName }</Text>
                    <Text style={{color: '#2FA8F8', fontSize: 11}}>{item.location.city}</Text>
                </TouchableOpacity>

                )} />

        </SafeAreaView>
        

    </>

    )
}

export default Shows;