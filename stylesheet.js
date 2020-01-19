import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    input: {
        backgroundColor: '#D8EEFC',
        color: '#6769F8',
        margin: 5,
        width: 220,
        height: 35,
        paddingHorizontal: 12,
        textAlign: 'center',
        fontSize: 16  
    },
    button: {
        position: 'relative',
        fontSize: 16,
    },
    formContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#2FA8F8',
        height: 40,
        margin: 10,
        width: 260,
    },
    searchInput: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 40,
        color: '#2FA8F8'
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    searchButton: {
        color: '#2FA8F8', 
        fontSize: 16, 
        fontWeight: 'bold', 
        borderWidth: 1, 
        borderColor: '#2FA8F8', 
        padding: 8, 
        borderRadius: 10
    },
    dymArtistContainer: {
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    dymArtistText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    didYouMean: {
        color: '#2FA8F8',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    artistName: {
        color: 'white',
        fontSize: 30,
        // top: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -100, height: 1},
        textShadowRadius: 10
    },
    albumContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        top: -100,
    },
    albumCard: {
        alignSelf: 'center',
        justifyContent: 'center', 
        borderRadius: 10, 
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 }, 
        shadowOpacity: 1, shadowRadius: 10, 
        marginHorizontal: 5,
        zIndex: 20
    }
});

