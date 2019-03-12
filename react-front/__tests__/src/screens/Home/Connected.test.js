import React from 'react';

import { shallow } from 'enzyme'
import ConnectedConnectedScreen, { ConnectedScreen } from '../../../../src/screens/Home/Connected';
import toJson from 'enzyme-to-json';

jest.mock('../../../../src/i18n', () => {});
jest.mock('react-native-gesture-handler', () => {});

describe('>>>> ConnectedScreen - REACT-REDUX (Shallow + passing the {store} directly', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ConnectedConnectedScreen />)
  })
  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1)
  })
  it('Snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})