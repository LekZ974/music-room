import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button, TextInput, View } from '../../components';
import I18n from '../../i18n';

import { Theme } from '../../native-base-theme/default_theme';

const styles = StyleSheet.create({
  forgotButton: Theme.typography.small,
  button: {
    marginTop: Theme.spacing.tiny,
  },
});

let LoginForm = props => {
  const { handleSubmit, onSubmit, goToForgotPassword } = props;

  return (
    <View>
      <Field
        keyboardType="email-address"
        autoCapitalize="none"
        name="email"
        autoCorrect={false}
        label={I18n.t('login.form.email')}
        component={TextInput}
      />
      <Field
        secureTextEntry
        name="password"
        label={I18n.t('login.form.password')}
        component={TextInput}
      />
      <Button
        style={styles.button}
        label={I18n.t('login.form.signIn')}
        onPress={handleSubmit(onSubmit)}
        full
        primary
      />
      <Button
        style={[styles.forgotButton, styles.button]}
        label={I18n.t('login.form.forgot')}
        onPress={goToForgotPassword}
        full
        light
      />
    </View>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  goToForgotPassword: PropTypes.func.isRequired,
};

export default (LoginForm = reduxForm({
  form: 'login',
})(LoginForm));
