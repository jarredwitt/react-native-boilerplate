import expect from 'expect';
import settings from '../settings';
import { fromJS } from 'immutable';

describe('settings Reducer', () => {
  it('returns the initial state', () => {
    expect(settings(undefined, {})).toEqual(fromJS({}));
  });
});
