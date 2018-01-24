import { combineReducers } from 'redux';
import Auth from './Auth';
import Todo from './todo';


const rootReducer  = combineReducers({
    Todo,
    Auth
})

export default rootReducer;