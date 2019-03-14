import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button, TextInput, View } from '../../components';
import I18n from '../../i18n';

import { Theme } from '../../native-base-theme/default_theme';

const styles = StyleSheet.create({
  button: {
    marginTop: Theme.spacing.small,
  },
});

let SignUpForm = props => {
  const { handleSubmit, onSubmit } = props;

  return (
    <View>
      <Field
        keyboardType="email-address"
        autoCapitalize="none"
        name="email"
        autoCorrect={false}
        label={I18n.t('signUp.form.email')}
        component={TextInput}
      />
      <Field
        secureTextEntry
        name="password"
        label={I18n.t('signUp.form.password')}
        component={TextInput}
      />
      <Field
        secureTextEntry
        name="passwordConfirmation"
        label={I18n.t('signUp.form.passwordConfirmation')}
        component={TextInput}
      />
      <Button
        style={styles.button}
        label={I18n.t('signUp.form.signUp')}
        onPress={handleSubmit(onSubmit)}
        full
        primary
      />
    </View>
  );
};

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default (SignUpForm = reduxForm({
  form: 'signUp',
})(SignUpForm));
