import React from 'react';

import { LinearGradient } from 'expo';

import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Theme } from '../native-base-theme/default_theme';

const centerView = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

const Container = ({ children, isLoading, color, center, linearGradient, ...props }) => {
  let backgroundColor;

  switch (color) {
    case 'dark':
      backgroundColor = Theme.palette.darkPrimary;
      break;
    case 'primary':
      backgroundColor = Theme.palette.primary;
      break;
    case 'light':
      backgroundColor = Theme.palette.ligthPrimary;
      break;
    case 'secondary':
      backgroundColor = Theme.palette.secondary;
      break;
    case 'white':
    default:
      backgroundColor = Theme.palette.textIcons;
      break;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor,
        padding: 10,
        ...(center && centerView),
      }}
      {...props}
    >
      {linearGradient && (
        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
          }}
        />
      )}
      {/* <ActivityIndicator animating={isLoading}/> */}
      {children}
    </SafeAreaView>
  );
};

Container.defaultProps = {
  color: 'ligth',
  center: false,
  linearGradient: false,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
  color: PropTypes.string,
  center: PropTypes.bool,
  linearGradient: PropTypes.bool,
};

export default connect(({ application }) => ({
  isLoading: application.isLoading,
}))(Container);
