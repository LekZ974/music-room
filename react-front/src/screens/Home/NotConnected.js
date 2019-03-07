import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet } from 'react-native';
import I18n from '../../i18n';

import { Button, Container, Logo, View } from '../../components';

import { Theme } from '../../native-base-theme/default_theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: Theme.spacing.small,
  },
});

const NotConnected = ({ navigation }) => (
  <Container style={styles.container}>
    <View>
      <Logo />
      <Button
        label={I18n.t('notConnected.loginButton')}
        style={styles.button}
        onPress={() => navigation.navigate('LoginScreen')}
        full
      />
      <Button
        label={I18n.t('notConnected.signUpButton')}
        style={styles.button}
        onPress={() => navigation.navigate('SignUpScreen')}
        full
      />
    </View>
  </Container>
);

NotConnected.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default NotConnected;
