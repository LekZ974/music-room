import React from 'react';
import { compose, branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';

import { Container, Content, Text } from '../../components';

import NotConnected from './NotConnected';
import I18n from '../../i18n';

const HomeScreen = () => (
  <Container>
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
