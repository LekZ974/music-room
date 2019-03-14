import React from 'react';

import { Input as NBInput, Item, Label } from 'native-base';
import PropTypes from 'prop-types';
import { Theme } from '../native-base-theme/default_theme';

export default function TextInput(props) {
  const { input, label, ...inputProps } = props;

  return (
    <Item fixedLabel>
      <Label style={{ color: Theme.palette.secondaryText }}>{label}</Label>
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
  label: PropTypes.string.isRequired,
};
