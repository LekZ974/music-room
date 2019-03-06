import React from 'react';

import { SafeAreaView, StatusBar, Platform } from 'react-native';
import { View } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ActivityIndicator from './ActivityIndicator';

const Container = ({ children, isLoading, grey, ...props }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: grey ? '#FAFAFA' : 'white',
        marginTop: Platform.OS !== 'ios' ? StatusBar.currentHeight : 0,
      }}
      {...props}
    >
      <ActivityIndicator animating={isLoading} />
      <View style={{ flex: 1, padding: 10 }}>{children}</View>
    </SafeAreaView>
  );
};

Container.defaultProps = {
  grey: false,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
  grey: PropTypes.bool,
};

export default connect(({ application }) => ({
  isLoading: application.isLoading,
}))(Container);
