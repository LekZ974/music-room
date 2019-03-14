import React from 'react';

import { shallow } from 'enzyme'
import ConnectedMusicTrackVoteScreen, { MusicTrackVoteScreen } from '../../../../../src/screens/CreateRoom/MusicTrackVote';
import toJson from 'enzyme-to-json';

jest.mock('../../../../../src/i18n', () => {});
jest.mock('react-native-gesture-handler', () => {});

describe('>>>> MusicTrackVoteScreen - REACT-REDUX (Shallow + passing the {store} directly', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ConnectedMusicTrackVoteScreen />)
  })
  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1)
  })
  it('Snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})