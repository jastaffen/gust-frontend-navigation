const initialState = {
    user: null,
    jwt: null,
    isLoading: false
}

const userAuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOADING_USER":
            return { 
                ...state,
                user: null,
                isLoading: true
            }
        
        case "ADD_USER":
        
            // if (action.jwt) {
            //     AsyncStorage.setItem('sessionId', action.user.sessionId);
            // }

            // if (action.user.id) {
            //     AsyncStorage.setItem('userId', action.user.id);
            // }
            return {
                ...state,
                user: action.user,
                jwt: action.jwt,
                isLoading: false
            }
        
        case "LOG_OUT":
            return {
                ...state,
                user: null,
                jwt: null
            }

        default:
            return state;

    }
}

export default userAuthReducer;