import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet } from 'react-native';
import { Container, Title, Button } from '../../components';

import I18n from '../../i18n';
import { login } from '../../redux/actions/user';
import LoginForm from './LoginForm';
import AuthSocials from './AuthSocials';

import { Theme } from '../../native-base-theme/default_theme';

const styles = StyleSheet.create({
  button: {
    marginTop: Theme.spacing.small,
  },
});

const LoginScreen = props => {
  const { signIn, navigation } = props;

  const signInUser = data => {
    signIn(data);
    navigation.navigate('Home');
  };

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const goToForgotPassword = () => {
    navigation.navigate('ResetPassword');
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container center>
      <KeyboardAwareScrollView enableOnAndroid>
        <Title>{I18n.t('login.title')}</Title>
        <LoginForm onSubmit={signInUser} goToForgotPassword={goToForgotPassword} />
        <Button
          style={styles.button}
          label={I18n.t('login.form.signUp')}
          onPress={goToSignUp}
          success
          full
        />
        <AuthSocials onSubmit={signInUser} />
        <Button label={I18n.t('login.form.cancel')} onPress={goBack} full light />
      </KeyboardAwareScrollView>
    </Container>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  signIn: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  signIn: user => dispatch(login(user)),
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginScreen);
