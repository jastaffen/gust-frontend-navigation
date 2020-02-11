//React 
import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import PureChart from 'react-native-pure-chart';
//Components
import Header from '../Header';

//imports
import { votesByUserLocation } from '../../requests';

const GraphCard = ({navigation}) => {

    const [data, setData] = useState(null)
    

    useEffect(() => {
        votesByUserLocation(navigation.getParam('songName'), navigation.getParam('artistName'))
        .then(obj => {
            let arr = [];
            arr = obj.map(vote => {
                return {x: vote.vote.location, y: vote.vote.vote_count }
            })
            let sampleData = {};
            sampleData['data'] = arr;
            sampleData['color'] = '#2FA8F8';
            setData([sampleData])
        })
    }, [])

    console.disableYellowBox = true;

    return(
    <View style={{flex: 1}}>

        <Header navigation={navigation} title={'Charts'}/>

        <View style={{top: 40, alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>{navigation.getParam('songName')}</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', width: '100%', padding: 5, marginTop: 90, left: -30}}>
            
           {data ? 

           <PureChart data={data} type={'bar'} width={'100%'}
            height={400} labelColor={'red'} numberOfYAxisGuideLine={1} numberOfXAxisGuideLine={data.length}
            defaultColumnMargin={50}
            highlightColor="blue"
            defaultColumnWidth={50}
            xAxisGridLineColor={'red'}
            yAxisGridLineColor={'red'}
            showEvenNumberXaxisLabel={false}
            yAxisColor={'red'}
            /> 

            : null }

        </View>
    </View>
    )
}

export default GraphCard;

