import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { Content, Title, Button, Text, TextInput } from '../../components';

let LoginForm = props => {
  const { handleSubmit, submit, navigation } = props;

  return (
    <Content>
      <Title>LOGIN PAGE</Title>
      <Field placeholder="Email" keyboardType="email-address" name="email" component={TextInput} />
      <Field placeholder="Mot de passe" name="password" component={TextInput} />
      <Button onPress={handleSubmit(submit)} full primary>
        <Text>Se connecter</Text>
      </Button>
      <Button onPress={() => navigation.goBack()} full light>
        <Text>Annuler</Text>
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
