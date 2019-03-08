import React from 'react';

import { SafeAreaView, StatusBar, Platform, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ActivityIndicator from './ActivityIndicator';

const centerView = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export const Container = ({ children, isLoading, grey, center, ...props }) => {
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
      <View
        style={{
          flex: 1,
          padding: 10,
          backgroundColor: grey ? '#FAFAFA' : 'white',
          ...(center && centerView),
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

Container.defaultProps = {
  grey: false,
  center: false,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
  grey: PropTypes.bool,
  center: PropTypes.bool,
};

export default connect(({ application }) => ({
  isLoading: application.isLoading,
}))(Container);
