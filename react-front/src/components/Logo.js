import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import MR_LOGO from '../../assets/logo.png';

const Logo = props => {
  const { source, sm, testID } = props;
  return (
    <View>
      <Image
        source={source || MR_LOGO}
        style={{
          width: sm ? 50 : 150,
          height: sm ? 50 : 150,
        }}
        resizeMode="contain"
        testID={testID}
      />
    </View>
  );
};

Logo.defaultProps = {
  source: null,
  sm: false,
  testID: '',
};

const ImageURISourcePropType = PropTypes.shape({
  uri: PropTypes.string,
  bundle: PropTypes.string,
  method: PropTypes.string,
  headers: PropTypes.objectOf(PropTypes.string),
  body: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  scale: PropTypes.number,
});

Logo.propTypes = {
  source: PropTypes.oneOfType([
    ImageURISourcePropType,
    PropTypes.number,
    PropTypes.arrayOf(ImageURISourcePropType),
  ]),
  sm: PropTypes.bool,
  testID: PropTypes.string,
};

export default Logo;
