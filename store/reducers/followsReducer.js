initialState = {
    follows: []
}

const followsReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case 'ADD_FOLLOWS':
            return {
                ...state,
                follows: action.follows
            }
        
        case 'ADD_FOLLOW':
            return {
                ...state,
                follows: [...state.follows, action.follow]
            }
        
        case 'UNFOLLOW':
            // console.log(action.follow)
            let followsWithoutUnFollowed = [...state.follows].filter(follow => follow.id !== action.follow.id);
            return {
                ...state,
                follows: followsWithoutUnFollowed
            }
        
        default:
            return state
    }
}

export default followsReducer;