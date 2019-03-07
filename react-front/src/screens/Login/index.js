import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet } from 'react-native';
import { Container, Content, Title, Button } from '../../components';

import I18n from '../../i18n';
import { login } from '../../redux/actions/user';
import LoginForm from './LoginForm';
import AuthSocials from './AuthSocials';

import { Theme } from '../../native-base-theme/default_theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: Theme.spacing.small,
  },
});

const LoginScreen = props => {
  const { signIn, navigation } = props;

  const signInUser = data => {
    signIn(data);
    navigation.navigate('HomeScreen');
  };

  const goToSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  const goToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid>
        <Content>
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
        </Content>
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
