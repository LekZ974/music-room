import React from 'react';
import { connect } from 'react-redux';
import { Container, Content, Header } from '../../components';
import LoginForm from './LoginForm';
import { login } from '../../redux/actions/user';

const LoginPage = props => {
  const submit = (data, dispatch) => {
    return dispatch(login(data));
  };

  return (
    <Container>
      <Header />
      <Content>
        <LoginForm onSubmit={submit} {...props} />
      </Content>
    </Container>
  );
};
export default connect(
  null,
  null,
)(LoginPage);
