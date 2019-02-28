import React from "react";
import { StyleProvider } from 'native-base'
import { Font, AppLoading } from 'expo'
import {Text} from 'react-native'

import getTheme from './native-base-theme/components'
import variables from './native-base-theme/variables/commonColor'

export default App = () => (
  <StyleProvider style={getTheme(variables)}>
    <Text>MUSIC ROOM!!!</Text>
  </StyleProvider>
)