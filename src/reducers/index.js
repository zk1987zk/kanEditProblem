import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import welcomeReducer from './welcomeReducer';

const rootReducer = combineReducers({
    mycounter:counterReducer,
    welcome:welcomeReducer,
})

export default rootReducer;


