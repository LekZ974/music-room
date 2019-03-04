import React from 'react';
import PropTypes from 'prop-types';

import { Button, Container, Content } from 'native-base';

const NotConnected = ({ navigation }) => (
  <Container>
    <Content>
      <Button label="J'ai déjà un compte" onPress={() => navigation.navigate('LoginPage')} full />
    </Content>
  </Container>
);

NotConnected.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default NotConnected;
