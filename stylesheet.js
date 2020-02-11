import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    homePageHeaderContainer: {
        flexDirection: 'row',
        top: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
    },
    mainText: {
        color: '#2FA8F8',
        fontSize: 30,
        alignSelf: 'center',
    },
    welcome: {
        color: '#2FA8F8',
        fontSize: 10,
        right: 10,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#D8EEFC',
        color: '#6769F8',
        margin: 8,
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
        height: 60,
        margin: 10,
        width: 260,
    },
    name: {
        backgroundColor: '#D8EEFC',
        color: '#6769F8',
        margin: 5,
        width: 150,
        height: 35,
        paddingHorizontal: 12,
        textAlign: 'center',
        fontSize: 16
    },
    searchInput: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 40,
        color: '#2FA8F8',
        fontSize: 18
    },
    authLoader: {
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
        fontSize: 18, 
        borderWidth: 1, 
        borderColor: '#2FA8F8', 
        padding: 12, 
        borderRadius: 10
    },
    dymArtistContainer: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    dymArtistText: {
        color: 'white',
        fontSize: 35,
        alignSelf: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 2},
        textShadowRadius: 10,
    },
    didYouMean: {
        color: '#30ACFF',
        // fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    artistName: {
        color: 'white',
        fontSize: 35,
        top: 25,
        textAlign: 'center',
        // fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
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
        marginHorizontal: 5,
        zIndex: 20
    },
    followButton: {
        top: -38, 
        left: 290, 
        paddingHorizontal: 8, 
        paddingVertical: 5, 
        width: 80, 
        alignContent: 'center', 
        borderWidth: 2, 
        borderColor: 'white', 
        borderRadius: 10
    }, 
    notFollowed: {
        backgroundColor: '#2FA8F8'
    },
    followed: {
        backgroundColor: '#2585C4',
        width: 100,
        left: 270
        // transition < -- insert transition of width increase
    },
    upcomingShowsContainer: {
        flex: 1, 
        flexDirection: 'row', 
        top: 30, 
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        justifyContent: 'center',
        zIndex: 10
    },
    upcomingShowsButtonInactive: {
        margin: 4, 
        padding: 15, 
        borderWidth: 2, 
        borderColor: '#1F60E0', 
        borderRadius: 10,
        backgroundColor: '#fff',
        maxWidth: 125,
        minWidth: 125
    },
    upcomingShowsButtonActive: {
        margin: 4, 
        padding: 15, 
        borderWidth: 2, 
        borderColor: '#1F60E0', 
        borderRadius: 10,
        backgroundColor: '#2FA8F8',
        maxWidth: 125,
        minWidth: 125
    },
    trackCard: {
        flex: 1, 
        alignSelf: 'stretch', 
        backgroundColor: 'black', 
        borderWidth: 1, 
        borderColor: 'white', 
        borderRadius: 10, 
        padding: 30, 
        width: width
    } 
});

