import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet } from 'react-native';
import { Container, View, Title, Button } from '../../components';

import I18n from '../../i18n';
import { signUp } from '../../redux/actions/user';
import SignUpForm from './SignUpForm';
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

const SignUpScreen = props => {
  const { subscribe, navigation } = props;

  const signUpUser = data => {
    subscribe(data);
    navigation.navigate('Home');
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container center color="light">
      <KeyboardAwareScrollView enableOnAndroid>
        <View style={{ padding: 10 }}>
          <Title testID="signUpScreenTitle">{I18n.t('signUp.title')}</Title>
          <SignUpForm onSubmit={signUpUser} />
          <Button
            style={[styles.button, { backgroundColor: Theme.palette.secondary }]}
            label={I18n.t('signUp.form.signIn')}
            onPress={goToLogin}
            full
          />
          <AuthSocials onSubmit={signUpUser} />
          <Button label={I18n.t('signUp.form.cancel')} onPress={goBack} full light />
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

SignUpScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  subscribe: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  subscribe: user => dispatch(signUp(user)),
});

export default connect(
  null,
  mapDispatchToProps,
)(SignUpScreen);
