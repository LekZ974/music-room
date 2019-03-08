import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import Main from '../../src/Main';

jest.mock('react-native-gesture-handler', () => {});
jest.mock('../../src/i18n', () => {});
jest.mock('../../src/routes.js', () => {});

describe('Main snapshot', () => {
  it('renders the loading screen', async () => {
    let wrapper = shallow(<Main />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});