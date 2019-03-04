import React from 'react';

import { connect } from 'react-redux';
import { Font, AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
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

const withStatus = lifecycle({
  async componentDidMount() {
    /* eslint-disable */
    try {
      await Font.loadAsync({
        'Roboto-Medium': RobotoMedium,
        'Roboto-Black': RobotoBlack,
        'Roboto-Bold': RobotoBold,
        'Roboto-Thin': RobotoThin,
        'Roboto-Regular': RobotoRegular,
        'Roboto-Light': RobotoLight,
        ...Ionicons.font,
      });
      this.setState({ ready: true });
    } catch (error) {
      console.log(error)
    }
    /* eslint-enable */
  },
});

const Main = withStatus((status, props) => {
  const { isLogged } = props;

  return (
    <StyleProvider style={getTheme(variables)}>
      {status.ready ? <Routes screenProps={{ isLogged }} /> : <AppLoading />}
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
