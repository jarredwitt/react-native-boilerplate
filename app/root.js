import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Router, TabNavigation, TabScene } from 'react-native-router-ex';

import configureStore from './store';
import {
  Main,
  Settings,
} from './screens';

const scenes = (
  <TabNavigation>
    <TabScene key="main" title="Main" component={Main} />
    <TabScene key="settings" title="Settings" component={Settings} />
  </TabNavigation>
);

const mapStateToProps = (state) => ({
  navState: state.navState,
});

const RouterScene = connect(mapStateToProps)(Router);


class Root extends Component {
  componentWillMount() {
    this._loadStore();
  }
  _loadStore = async () => {
    const store = await configureStore();
    this.store = store;
    this.forceUpdate();
  }
  render() {
    if (!this.store) {
      return <Text>Waiting for store...</Text>;
    }

    return (
      <Provider store={this.store}>
        <RouterScene scenes={scenes} />
      </Provider>
    );
  }
}

export default Root;
