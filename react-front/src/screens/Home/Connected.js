import React from 'react';
import { connect } from 'react-redux';

import { requireNativeComponent } from 'react-native';
import { Container, Content, Text } from '../../components';

import I18n from '../../i18n';

const MusicBarView = requireNativeComponent('MusicBarView');

console.log('MRBAR VIEW ===>', MusicBarView);

const ConnectedScreen = () => (
  <Container color="primary" linearGradient>
    <Content>
      <Text>{I18n.t('home.content')}</Text>
      <MusicBarView style={{ height: 100 }} />
    </Content>
  </Container>
);

export default connect()(ConnectedScreen);
