//React
import React from 'react';
import { TouchableHighlight, View, FlatList, Image, ScrollView, SafeAreaView, Dimensions } from 'react-native';
//imports
import { styles } from '../../stylesheet';
//Constants
const width = Dimensions.get('window').width;

const AlbumCarousel = ({albums}) => {

    const handleAlbumPress = id => {
        console.log(id);
    }

    return(

        <SafeAreaView>

            <FlatList data={albums} horizontal renderItem={({item}) => (

                <View style={{flexDirection:'row', flexWrap: 'wrap', alignItems: 'flex-start', flex: 1}}>

                    <TouchableHighlight style={[styles.albumCard, {alignItems: 'center'}]} onLongPress={() => handleAlbumPress(item.id)}>
                        <Image source={item.images[1]} id={item.id}
                        style={{width: item.images[1].width * 0.8, 
                        height: item.images[1].height * 0.8}} />
                    </TouchableHighlight>

                </View>

            )}/>

        </SafeAreaView>
    )
};

export default AlbumCarousel;