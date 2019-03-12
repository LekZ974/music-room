import React from 'react';

import { Text as NBText } from 'native-base';

import PropTypes from 'prop-types';
import { Theme } from '../native-base-theme/default_theme';

const Text = props => {
  const { color } = props;

  let textColor;

  switch (color) {
    case 'primary':
    default:
      textColor = Theme.palette.primaryText;
      break;
    case 'secondary':
      textColor = Theme.palette.secondaryText;
      break;
    case 'alt':
      textColor = Theme.palette.textIcons;
      break;
  }

  return (
    <NBText
      style={{
        color: textColor,
      }}
      {...props}
    />
  );
};

Text.defaultProps = {
  color: 'primary',
};

Text.propTypes = {
  color: PropTypes.string,
};

export default Text;
