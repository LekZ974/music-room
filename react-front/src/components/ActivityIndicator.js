import React from 'react';
import { ActivityIndicator as ActivityIndicatorComponent, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgColor: {
    backgroundColor: '#ffffff',
  },
});

const ActivityIndicator = ({ animating, transparent }) => {
  return (
    <ActivityIndicatorComponent
      style={[styles.loading, !transparent && styles.bgColor]}
      animating={animating}
      size="large"
    />
  );
};

ActivityIndicator.defaultProps = {
  transparent: false,
};

ActivityIndicator.propTypes = {
  animating: PropTypes.bool.isRequired,
  transparent: PropTypes.bool,
};

export default ActivityIndicator;
