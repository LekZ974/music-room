import React from 'react';
import renderer from 'react-test-renderer';
import Content from '../../../src/components/Content';

it('renders correctly', () => {
  const tree = renderer.create(<Content>Snapshot test with Content Component!</Content>).toJSON();

  expect(tree).toMatchSnapshot();
});
