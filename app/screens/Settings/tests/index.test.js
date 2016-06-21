/*
*
*	Settings - built using screen generator
*
*/

import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {} from '~/actions/settings';
import { selectSettings } from '~/selectors';
import styles from './styles/index.style';

export class Settings extends Component {
  static propTypes = {

  };

  render() {
    return (
      <View style={styles.main}>
        <Text>I am the Settings screen.</Text>
      </View>
    );
  }
}

const mapStateToProps = createSelector(
  selectSettings(),
  () => ({}),
);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
