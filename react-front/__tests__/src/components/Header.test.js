import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../../src/components/Header';

it('renders correctly', () => {
  const tree = renderer.create(<Header>Snapshot test with Header Component!</Header>).toJSON();

  expect(tree).toMatchSnapshot();
});
