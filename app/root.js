import React from 'react';
import { Provider, connect } from 'react-redux';
import { Router, RootScene, TabScene } from 'react-native-router-ex';

import configureStore from './store';
import { Main } from './screens';

const scenes = (
  <RootScene type="tabs">
    <TabScene key="main" title="Main" component={Main} />
  </RootScene>
);

const mapStateToProps = (state) => ({
  navState: state.navState,
});

const RouterScene = connect(mapStateToProps)(Router);

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <RouterScene scenes={scenes} />
  </Provider>
);

export default Root;
