import React from 'react';
import PropTypes from 'prop-types';

import { Button, Container, Content, Header, Text } from '../../components';

const NotConnected = ({ navigation }) => (
  <Container>
    <Header />
    <Content>
      <Button onPress={() => navigation.navigate('LoginPage')} full>
        <Text>J&apos;ai déjà un compte</Text>
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
