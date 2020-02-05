//React
import React from 'react';
import { View, Text, Picker, TextInput } from 'react-native';
//imports
import countries from '../../constants/countries.js';
import states from '../../constants/states';


const ManualLocationSelection = ({city, handleManualCity, handleManualCountrySelection, handleManualStateSelection, country, state}) => {

    return(

        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>

            <View style={{top: -10, width: 125, justifyContent: 'center', margin: 35}}>

                <Text style={{padding: 30, width: 200, fontSize: 16, color: '#2FA8F8', fontWeight: 'bold'}}>Almost Done!...</Text>
                <TextInput autoCapitalize="words" style={styles.name} placeholder="nearest city..." value={city} onChangeText={handleManualCity} />

            </View>

            <View style={{top: -8, width: 125, justifyContent: 'center', margin: 35}}>

                <Text style={{top: 70, alignSelf: 'center'}}>Select a Country:</Text>

                <Picker style={{width: 100}} itemStyle={{fontSize: 10, fontWeight: 'bold', textAlign: 'center'}} selectedValue={country} onValueChange={(itemValue) => handleManualCountrySelection(itemValue)} mode="dropdown">

                {countries.map(cntry => 

                    <Picker.Item key={cntry.code} label={cntry.name} value={cntry.code} />)}

                </Picker>

                { country && country === 'US' ? 

                <View style={{top: -8, width: 125, justifyContent: 'center', margin: 35}}>

                    <Text style={{top: 70, alignSelf: 'center'}}>Select a State:</Text>

                    <Picker style={{width: 100}} itemStyle={{fontSize: 10, fontWeight: 'bold', textAlign: 'center'}} selectedValue={state} onValueChange={(itemValue) => handleManualStateSelection(itemValue)} mode="dropdown">

                        { states.map(state => <Picker.Item key={state.code} label={state.name} value={state.code} />) }

                    </Picker> 

                </View>

                : 

                null}

            </View>

        </View>

    )
}

export default ManualLocationSelection;