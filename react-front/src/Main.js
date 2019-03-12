import React from 'react';

import { connect } from 'react-redux';
import { Asset, Font, AppLoading } from 'expo';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import { lifecycle } from 'recompose';
import { StyleProvider } from 'native-base';
import Routes from './routes';
import getTheme from './native-base-theme/components';
import variables from './native-base-theme/variables/commonColor';

const RobotoThin = require('../assets/fonts/Roboto-Thin.ttf');
const RobotoBlack = require('../assets/fonts/Roboto-Black.ttf');
const RobotoBold = require('../assets/fonts/Roboto-Bold.ttf');
const RobotoMedium = require('../assets/fonts/Roboto-Medium.ttf');
const RobotoRegular = require('../assets/fonts/Roboto-Regular.ttf');
const RobotoLight = require('../assets/fonts/Roboto-Light.ttf');

/* eslint-disable */
const _loadResourcesAsync = async () => {
  return Promise.all([
    Asset.loadAsync([
      require('../assets/logo.png'),
      require('../assets/logo-title.png'),
      require('../assets/icon.png'),
    ]),
    Font.loadAsync({
      'Roboto-Medium': RobotoMedium,
      'Roboto-Black': RobotoBlack,
      'Roboto-Bold': RobotoBold,
      'Roboto-Thin': RobotoThin,
      'Roboto-Regular': RobotoRegular,
      'Roboto-Light': RobotoLight,
      ...Ionicons.font,
      ...FontAwesome.font,
      ...Feather.font,
    })
  ]);
};

const _handleLoadingError = error => {
  console.log(error);
}

const _handleFinishLoading = () => {
  console.log('App is load and ready');
}

const withStatus = lifecycle({
  async componentDidMount() {
    try {
      await _loadResourcesAsync()
      this.setState({ ready: true });
    } catch (error) {
      console.log(error)
    }
    /* eslint-enable */
  },
});

const Main = withStatus(status => {
  return (
    <StyleProvider style={getTheme(variables)}>
      {status.ready || status.skipLoadingScreen ? (
        <Routes screenProps={status} />
      ) : (
        <AppLoading
          startAsync={_loadResourcesAsync}
          onError={_handleLoadingError}
          onFinish={_handleFinishLoading}
        />
      )}
    </StyleProvider>
  );
});

const mapStateToProps = state => {
  return {
    isLogged: !!state.user.email,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Main);
