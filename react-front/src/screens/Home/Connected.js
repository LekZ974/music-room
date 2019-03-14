import React from 'react';
import { connect } from 'react-redux';

import { Container, Content, Text } from '../../components';

import I18n from '../../i18n';

const ConnectedScreen = () => (
  <Container color="primary" linearGradient>
    <Content>
      <Text>{I18n.t('home.content')}</Text>
    </Content>
  </Container>
);

export default connect()(ConnectedScreen);
