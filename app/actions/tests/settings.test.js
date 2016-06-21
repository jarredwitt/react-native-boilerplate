import expect from 'expect';
import {
  defaultAction,
} from '../actions/settings';
import * as actions from '~/constants/settings';

describe('Settings actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: actions.DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
