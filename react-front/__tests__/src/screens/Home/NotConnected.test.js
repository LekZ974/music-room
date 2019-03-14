import React from 'react';

import { shallow } from 'enzyme'
import NotConnected from '../../../../src/screens/Home/NotConnected';
import toJson from 'enzyme-to-json';

jest.mock('react-native-gesture-handler', () => {});
jest.mock('../../../../src/i18n', () => ({ t: jest.fn() }));

const navigation = { navigate: jest.fn() };

describe('>>>> NotConnected - REACT-REDUX (Shallow + passing the {store} directly', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NotConnected navigation={navigation} />)
  })
  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1)
  })
  it('Snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})