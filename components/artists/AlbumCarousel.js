//React
import React, {useState} from 'react';
import { TouchableHighlight, View, FlatList, Image, SafeAreaView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
//imports
import { styles } from '../../stylesheet';
import { fetchAlbumTracks } from '../../requests';
//Constants
const width = Dimensions.get('window').width;

const AlbumCarousel = ({navigation, albums, spotifyToken, albumTracks}) => {

    const [albumsLoading, setAlbumLoad] = useState(false);

    const handleAlbumPress = (id, name) => {
        setAlbumLoad(true);
        fetchAlbumTracks(spotifyToken, id)
        .then(obj => {
            obj.items.map(item => item.votes = []);
            albumTracks(obj.items);
            setAlbumLoad(false);
            navigation.navigate('Tracks', { name: name });
        })
    }
    

    return(
        
        <SafeAreaView>
            
            <FlatList horizontal data={albums} showsHorizontalScrollIndicator={false} renderItem={({item}) => (

                <View style={{flexDirection:'row', flexWrap: 'wrap', alignItems: 'flex-start', flex: 1}}>

                    <TouchableHighlight style={[styles.albumCard, {alignItems: 'center'}]} onPress={() => handleAlbumPress(item.id, item.name)}>
                        <Image source={item.images[1]} id={item.id}
                        style={{width: item.images[1].width * 0.8, 
                        height: item.images[1].height * 0.8, borderRadius: 10, 
                        shadowColor: '#000', shadowOffset: { width: 10, height: 10 }, 
                        shadowOpacity: 1, shadowRadius: 10,}} />
                    </TouchableHighlight>

                </View>

            )}/>

        </SafeAreaView>
    )
};


const mdp = dispatch => {
    return {
        albumTracks: (tracks) => dispatch({type: 'GET_TRACKS', tracks})
    }
}

export default connect(null, mdp)(AlbumCarousel);