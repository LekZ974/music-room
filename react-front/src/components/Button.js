import React from 'react';

import { Button as NBButton, Text, Icon } from 'native-base';
import PropTypes from 'prop-types';

const Button = props => {
  const { label, iconName, iconType, testID } = props;

  return (
    <NBButton
      iconLeft
      style={{
        height: 60,
      }}
      testID={testID}
      {...props}
    >
      {iconName && <Icon name={iconName} type={iconType || 'MaterialIcons'} />}
      <Text>{label}</Text>
    </NBButton>
  );
};

Button.defaultProps = {
  label: null,
  iconName: null,
  iconType: null,
  testID: '',
};

Button.propTypes = {
  label: PropTypes.string,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  testID: PropTypes.string,
};

export default Button;
