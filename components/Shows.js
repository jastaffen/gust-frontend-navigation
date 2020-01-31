//React
import React, {useState, useEffect} from 'react';
import { FlatList, TextInput, SafeAreaView, Image, Button, View, Text, Dimensions } from 'react-native';
//Components
import SearchForShow from './SearchForShow';
//Imports
import UpcomingShowsLogo from '../images/upcomingshows.png';
import { styles } from '../stylesheet';


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

        <SafeAreaView style={{flex: 5, justifyContent: 'center', alignSelf: 'center', top: 20, height: 555}}>
            
            <FlatList horizontal={false} showsVerticalScrollIndicator={false} data={upcomingShows} style={{flexDirection: 'column'}} numColumns={2} contentContainerStyle={{paddingBottom: 20}} renderItem={({item}) => (

                <View style={{borderWidth: 2, borderColor: '#2FA8F8', borderRadius: 10, margin: 5, width: 150, justifyContent: 'center', alignItems: 'center', padding: 20}}>
                    <Text>{handleDates(item.start.date)}</Text>
                    <Image source={UpcomingShowsLogo} style={{width: 60, height: 60}} />
                    <Text style={{fontSize: 10}}>{item.venue.displayName === 'Unknown venue' ? item.displayName : item.venue.displayName }</Text>
                    <Text style={{fontSize: 9, marginTop: 5, fontWeight: 'bold'}}>{item.location.city}</Text>
                </View>

                )} />

        </SafeAreaView>
        

    </>

    )
}

export default Shows;