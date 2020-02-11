// React
import React from 'react';
import { TextInput } from 'react-native';
//imports
import { styles } from '../stylesheet';

const SearchForShow = ({searchTerm, handleSearchTermChange}) => {
    return <TextInput style={{position: 'absolute', top: -190, left: -12, alignSelf: 'center', zIndex: 1000000, padding: 10, color: '#2585C4',
    fontSize: 18, width: 190}} placeholder="Search for a show by location" placeholderTextColor='#2585C4'
     value={searchTerm} onChangeText={handleSearchTermChange} />
}

export default SearchForShow;