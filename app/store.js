import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fromJS } from 'immutable';

import createReducer from '~/reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const store = createStore(
    createReducer(),
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  store.runSaga = sagaMiddleware.run;

  return store;
}
