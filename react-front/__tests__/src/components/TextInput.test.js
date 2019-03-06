import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from '../../../src/components/TextInput';

it('renders correctly', () => {
  const tree = renderer
    .create(<TextInput input={{ placeholder: 'Snapshot test with TextInput Component!' }} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
