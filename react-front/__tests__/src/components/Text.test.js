import React from 'react';
import renderer from 'react-test-renderer';
import Text from '../../../src/components/Text';

it('renders correctly', () => {
  const tree = renderer.create(<Text>Snapshot test with Text Component!</Text>).toJSON();

  expect(tree).toMatchSnapshot();
});
