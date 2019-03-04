import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Title, Button, Text, Input } from 'native-base';
import PropTypes from 'prop-types';

function MyTextInput(props) {
  const { input, meta, ...inputProps } = props;

  const formStates = [
    'active',
    'autofilled',
    'asyncValidating',
    'dirty',
    'invalid',
    'pristine',
    'submitting',
    'touched',
    'valid',
    'visited',
  ];

  return (
    <Container>
      <Input
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
      <Text>The {input.name} input is:</Text>
      {formStates
        .filter(state => meta[state])
        .map(state => {
          return <Text key={state}> - {state}</Text>;
        })}
    </Container>
  );
}

MyTextInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({}).isRequired,
};

let LoginForm = props => {
  const { handleSubmit, submit, navigation } = props;
  const formStates = [
    'asyncValidating',
    'dirty',
    'pristine',
    'valid',
    'invalid',
    'submitting',
    'submitSucceeded',
    'submitFailed',
  ];

  return (
    <Container>
      <Title>LOGIN PAGE</Title>
      <Field
        placeholder="Email"
        keyboardType="email-address"
        name="email"
        component={MyTextInput}
      />
      <Field placeholder="Mot de passe" name="password" component={MyTextInput} />
      <Text>The form is:</Text>
      {formStates
        .filter(state => props[state])
        .map(state => {
          return <Text key={state}> - {state}</Text>;
        })}
      <Button label="Se connecter" onPress={handleSubmit(submit)} full primary />
      <Button label="Annuler" onPress={() => navigation.goBack()} transparent full light />
    </Container>
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
