// React
import React from 'react';
import { TextInput } from 'react-native';
//imports
import { styles } from '../stylesheet';

const SearchForShow = ({searchTerm, handleSearchTermChange}) => {
    return <TextInput style={{position: 'absolute', top: -240, alignSelf: 'center', zIndex: 1000000, borderWidth: 1, borderColor: '#2FA8F8', padding: 15, color: '#2FA8F8',
    fontSize: 18}} placeholder="Search for a show by location" value={searchTerm} onChangeText={handleSearchTermChange} />
}

export default SearchForShow;