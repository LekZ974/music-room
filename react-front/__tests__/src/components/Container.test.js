import React from 'react';

import { shallow } from 'enzyme'
import ConnectedContainer, { Container } from '../../../src/components/Container';
import toJson from 'enzyme-to-json';

jest.mock('../../../src/components/ActivityIndicator', () => 'Activity indicator')
jest.mock('react-native-gesture-handler', () => {});

describe('>>>> CONTAINER - REACT-REDUX (Shallow + passing the {store} directly', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ConnectedContainer isLoading={false} />)
  })
  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1)
  })
  it('Snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})