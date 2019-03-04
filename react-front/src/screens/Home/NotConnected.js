import React from 'react';
import PropTypes from 'prop-types';

import I18n from '../../i18n';

import { Button, Container, Content, Header, Text } from '../../components';

const NotConnected = ({ navigation }) => (
  <Container>
    <Header />
    <Content>
      <Button onPress={() => navigation.navigate('LoginPage')} full>
        <Text>{I18n.t('notConnected.loginButton')}</Text>
      </Button>
    </Content>
  </Container>
);

NotConnected.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default NotConnected;
