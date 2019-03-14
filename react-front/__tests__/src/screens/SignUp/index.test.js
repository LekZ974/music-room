import React from 'react';

import { shallow } from 'enzyme'
import ConnectedSignUpScreen, { SignUpScreen } from '../../../../src/screens/SignUp';
import toJson from 'enzyme-to-json';

jest.mock('../../../../src/i18n', () => {});
jest.mock('react-native-gesture-handler', () => {});

describe('>>>> SignUpScreen - REACT-REDUX (Shallow + passing the {store} directly', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ConnectedSignUpScreen />)
  })
  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1)
  })
  it('Snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})