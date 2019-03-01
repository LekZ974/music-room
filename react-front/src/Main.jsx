import React from 'react';
import { StyleProvider } from 'native-base';
import { Text } from 'react-native';

import getTheme from './native-base-theme/components';
import variables from './native-base-theme/variables/commonColor';

const Main = () => (
  <StyleProvider style={getTheme(variables)}>
    <Text>MUSIC ROOM!!!</Text>
  </StyleProvider>
);
export default Main();
