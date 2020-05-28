//Meeting place for all reducers powered by Redux
import { combineReducers } from 'redux';
import itemReducer from './itemReducer.js';

export default combineReducers({
    item: itemReducer
});