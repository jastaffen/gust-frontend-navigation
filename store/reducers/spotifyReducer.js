const initialState = {
    spotifyToken: null,
    isLoading: false,
    artists: null,
    selectedArtist: null,
    albums: null
};

const spotifyReducer = (state = initialState, action) => {
    switch(action.type) {

        case "LOADING":   
            return {
                ...state,
                isLoading: true
            }

        case "GET_TOKEN":
            return {
                ...state,
                spotifyToken: action.token,
                isLoading: false
            }
        
        case "GET_ARTISTS":
            return {
                ...state,
                artists: action.artists
            }
        
        case "SELECT_ARTIST":
            return {
                ...state,
                isLoading: false,
                selectedArtist: action.selectedArtist
            }

        case "GET_ALBUMS":
            return {
                ...state,
                isLoading: false,
                albums: action.albums
            }
        
        default: 
            return state
        
    }
}

export default spotifyReducer;