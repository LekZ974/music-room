import React from 'react';

import { shallow } from 'enzyme'
import ConnectedHomeScreen, { HomeScreen } from '../../../../src/screens/Home';
import toJson from 'enzyme-to-json';

jest.mock('../../../../src/i18n', () => {});

describe('>>>> HomeScreen - REACT-REDUX (Shallow + passing the {store} directly', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ConnectedHomeScreen />)
  })
  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1)
  })
  it('Snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})