import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { Content, Button, Text, TextInput } from '../../components';
import I18n from '../../i18n';

let LoginForm = props => {
  const { handleSubmit, submit, navigation } = props;

  return (
    <Content>
      <Field
        placeholder={I18n.t('login.form.email')}
        keyboardType="email-address"
        name="email"
        component={TextInput}
      />
      <Field placeholder={I18n.t('login.form.password')} name="password" component={TextInput} />
      <Button onPress={handleSubmit(submit)} full primary>
        <Text>{I18n.t('login.form.validate')}</Text>
      </Button>
      <Button onPress={() => navigation.goBack()} full light>
        <Text>{I18n.t('login.form.cancel')}</Text>
      </Button>
    </Content>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default (LoginForm = reduxForm({
  form: 'login',
})(LoginForm));
