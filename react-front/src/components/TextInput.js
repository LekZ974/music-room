import React from 'react';

import { Input as NBInput, Item } from 'native-base';
import PropTypes from 'prop-types';

export default function TextInput(props) {
  const { input, ...inputProps } = props;

  return (
    <Item>
      <NBInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
    </Item>
  );
}

TextInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
  }).isRequired,
};
