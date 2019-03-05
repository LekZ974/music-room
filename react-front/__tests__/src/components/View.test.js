import React from 'react';
import renderer from 'react-test-renderer';
import View from '../../../src/components/View';

it('renders correctly', () => {
  const tree = renderer.create(<View>Snapshot test with View Component!</View>).toJSON();

  expect(tree).toMatchSnapshot();
});
