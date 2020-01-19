//React
import React from 'react';
import { View, Text, Button, SafeAreaView, ScrollView } from 'react-native'
import { connect } from 'react-redux';
//Components
import ArtistCard from '../components/artists/ArtistCard';
import Header from '../components/Header';
//imports
import { styles } from '../stylesheet';


const DidYouMeanContainer = ({navigation, artists}) => {
    
    const renderArtists = () => {
      return artists.map(artist => <ArtistCard key={artist.id} artist={artist} navigation={navigation} />)
    }

    return(
  
      <View style={{flex: 1}}>
        
        <Header navigation={navigation} />

        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>

          <Text style={styles.didYouMean}>Did You Mean?</Text>

          <View>
            <ScrollView>
              {renderArtists()}
            </ScrollView>
          </View>
          
        </SafeAreaView>

      </View>
  
    ) 
};

const msp = state => {
  return {
    artists: state.spotify.artists
  }
}

export default connect(msp)(DidYouMeanContainer);