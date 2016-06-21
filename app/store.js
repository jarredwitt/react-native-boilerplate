import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import devTools from 'remote-redux-devtools';
import { fromJS } from 'immutable';

import createReducer from '~/reducers';
import { appData } from '~/utils/storage';

const sagaMiddleware = createSagaMiddleware();

export async function flushStateToStorage() {
  const currentData = this.getState();

  const flushData = {
    user: currentData.user.toJS ? currentData.user.toJS() : currentData.user,
  };

  await appData.setData(flushData);
}

const flushStateToStorageMiddleWare = store => next => action => {
  const result = next(action);
  if (action.flush) {
    flushStateToStorage.call(store);
  }

  return result;
};

export default async function configureStore(initialState = {}) {
  const finalCreateStore = compose(
    applyMiddleware(
      flushStateToStorageMiddleWare,
      sagaMiddleware,
    ),
    devTools(),
  )(createStore);

  const storageData = await appData.getData();

  const rootState = initialState;
  Object.keys(storageData).forEach(k => {
    rootState[k] = fromJS(storageData[k]);
  });

  const store = finalCreateStore(createReducer(), rootState);

  store.runSaga = sagaMiddleware.run;

  return store;
}
