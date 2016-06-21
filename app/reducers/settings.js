/*
*
*	Settings - built using screen generator
*
*/

import { fromJS } from 'immutable';
import * as actions from '~/constants/settings';

const initialState = fromJS({});

function settings(state = initialState, action) {
  switch (action.type) {
    case actions.DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default settings;
