import React from 'react';

import { shallow } from 'enzyme'
import ConnectedPlayListEditorScreen, { PlayListEditorScreen } from '../../../../../src/screens/CreateRoom/PlayListEditor';
import toJson from 'enzyme-to-json';

jest.mock('../../../../../src/i18n', () => {});
jest.mock('react-native-gesture-handler', () => {});

describe('>>>> PlayListEditorScreen - REACT-REDUX (Shallow + passing the {store} directly', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ConnectedPlayListEditorScreen />)
  })
  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1)
  })
  it('Snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})