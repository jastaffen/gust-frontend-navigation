//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//Reducers
import userAuthReducer from './reducers/userAuthReducer';
import spotifyReducer from './reducers/spotifyReducer';

const rootReducer = combineReducers({
    userAuth: userAuthReducer,
    spotify: spotifyReducer
})

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;