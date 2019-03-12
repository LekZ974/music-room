import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import Provider from '../../src/Provider';

jest.mock('react-native-gesture-handler', () => {});
jest.mock('../../src/i18n', () => {});
jest.mock('../../src/routes.js', () => {});

describe('Provider snapshot', () => {
  it('renders the loading screen', async () => {
    let wrapper = shallow(<Provider />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});