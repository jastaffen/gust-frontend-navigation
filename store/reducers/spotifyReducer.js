const initialState = {
    spotifyToken: null,
    isLoading: false,
    artists: null,
    selectedArtist: null,
    albums: null,
    tracks: null
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
                selectedArtist: action.selectedArtist,
                albums: null,
            }
        
        case "DESELECT_ARTIST":
            return {
                ...state,
                selectedArtist: null,
                albums: null
            }

        case "GET_ALBUMS":
            return {
                ...state,
                isLoading: false,
                albums: action.albums
            }
        
        case "GET_TRACKS":
            return {
                ...state,
                tracks: action.tracks
            }
        
        case "ADD_VOTE":
            let copy = [...state.tracks];
            let trackToAddVote = copy.find(track => track.id === action.track.id);
            trackToAddVote.votes.push(action.vote);
            const newTracks = copy.map(track => {
                if (track.id === trackToAddVote.id) {
                    return trackToAddVote
                } else {
                    return track
                }
            });
            return {
                ...state,
                tracks: newTracks
            }
            
        case "DELETE_VOTE":
            let trackWithoutVote = action.track.votes.filter(vote => vote.id !== action.vote.id);
            let downvotedTrack = action.track.votes = trackWithoutVote
            
            let handledTracks = [...state.tracks].map(track => {
                if (track.id === downvotedTrack.id) {
                    return downvotedTrack
                } else {
                    return track
                }
            })

            return {
                ...state,
                tracks: handledTracks
            }
        
        default: 
            return state
        
    }
}

export default spotifyReducer;