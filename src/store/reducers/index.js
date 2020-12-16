import { combineReducers } from 'redux';
import userReducer from './user';
import dataReducer from './data';

export default combineReducers({
    user: userReducer,
    data: dataReducer,
});