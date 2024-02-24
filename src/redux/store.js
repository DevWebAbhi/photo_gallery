import {legacy_createStore,combineReducers} from 'redux';
import {reducer} from './reducer';
const cReducer=combineReducers({
reducer
});

export const store = legacy_createStore(cReducer);