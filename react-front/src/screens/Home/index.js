import React from 'react';
import { compose, branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';

import { Header } from 'native-base';

import { Container, Content, Text, Title } from '../../components';

import NotConnected from './NotConnected';
import I18n from '../../i18n';

const HomeScreen = () => (
  <Container>
    <Header>
      <Title>Music Room</Title>
    </Header>
    <Content>
      <Text>{I18n.t('home.content')}</Text>
    </Content>
  </Container>
);

const mapStateToProps = state => {
  return {
    isLogged: !!state.user.email,
  };
};

export default compose(
  connect(
    mapStateToProps,
    null,
  ),
  branch(({ isLogged }) => !isLogged, renderComponent(NotConnected)),
)(HomeScreen);
