import React from 'react';
import renderer from 'react-test-renderer';
import CardItem from '../../../src/components/CardItem';

it('renders correctly', () => {
  const tree = renderer
    .create(<CardItem>Snapshot test with CardItem Component!</CardItem>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
