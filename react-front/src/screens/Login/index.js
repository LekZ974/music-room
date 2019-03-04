import React from 'react';
import { connect } from 'react-redux';
import { Container, Content, Header, Title } from '../../components';
import LoginForm from './LoginForm';
import { login } from '../../redux/actions/user';
import I18n from '../../i18n';

const LoginPage = props => {
  const submit = (data, dispatch) => {
    return dispatch(login(data));
  };

  return (
    <Container>
      <Header />
      <Content>
        <Title>{I18n.t('login.title')}</Title>
        <LoginForm onSubmit={submit} {...props} />
      </Content>
    </Container>
  );
};
export default connect(
  null,
  null,
)(LoginPage);
