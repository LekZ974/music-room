import React from 'react';

import renderer from 'react-test-renderer';
import { Container } from '../../../src/components/Container';

jest.mock('../../../src/components/ActivityIndicator', () => 'Activity indicator')

it('renders correctly', () => {
  const tree = renderer.create(<Container isLoading={false}>Snapshot test with CardItem Component!</Container>).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with loading', () => {
  const tree = renderer.create(<Container isLoading>Snapshot test with CardItem Component!</Container>).toJSON();

  expect(tree).toMatchSnapshot();
});
