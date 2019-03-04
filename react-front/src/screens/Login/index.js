import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import LoginForm from './LoginForm';
import { login } from '../../redux/actions/user';

const LoginPage = props => {
  const submit = (data, dispatch) => {
    return dispatch(login(data));
  };

  return (
    <Container>
      <LoginForm onSubmit={submit} {...props} />
    </Container>
  );
};
export default connect(
  null,
  null,
)(LoginPage);
