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