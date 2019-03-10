import React from 'react';

import { shallow } from 'enzyme'
import ConnectedAccountScreen, { AccountScreen } from '../../../../src/screens/Account';
import toJson from 'enzyme-to-json';

jest.mock('../../../../src/i18n', () => {});

describe('>>>> AccountScreen - REACT-REDUX (Shallow + passing the {store} directly', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ConnectedAccountScreen />)
  })
  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1)
  })
  it('Snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})