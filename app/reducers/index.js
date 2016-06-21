import { Reducer } from 'react-native-router-ex';
import { combineReducers } from 'redux';

// -- APPEND ITEMS HERE
import settings from './settings';

export default function createReducer() {
  return combineReducers({
    settings,
    navState: Reducer,
  });
}
