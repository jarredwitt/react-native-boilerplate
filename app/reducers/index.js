import { Reducer } from 'react-native-router-ex';
import { combineReducers } from 'redux';

// -- APPEND ITEMS HERE

export default function createReducer() {
  return combineReducers({
    navState: Reducer,
  });
}
