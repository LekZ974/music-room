import React from 'react';

import { connect } from 'react-redux';
import { Font, AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { lifecycle } from 'recompose';
import Routes from './routes';

const withStatus = lifecycle({
  async componentDidMount() {
    /* eslint-disable */
    try {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
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

  return status.ready ? <Routes screenProps={{ isLogged }} /> : <AppLoading />;
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
