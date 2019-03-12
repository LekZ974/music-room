import React from 'react';

import { shallow } from 'enzyme'
import ConnectedLoginScreen, { LoginScreen } from '../../../../src/screens/Login';
import toJson from 'enzyme-to-json';

jest.mock('../../../../src/i18n', () => {});
jest.mock('react-native-gesture-handler', () => {});

describe('>>>> LoginScreen - REACT-REDUX (Shallow + passing the {store} directly', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ConnectedLoginScreen />)
  })
  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1)
  })
  it('Snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})