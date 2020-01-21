//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//Reducers
import userAuthReducer from './reducers/userAuthReducer';
import spotifyReducer from './reducers/spotifyReducer';
import followsReducer from './reducers/followsReducer';

const rootReducer = combineReducers({
    userAuth: userAuthReducer,
    spotify: spotifyReducer,
    follows: followsReducer
})

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;