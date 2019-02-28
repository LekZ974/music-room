import React from 'react'

import { Provider } from 'react-redux'
import {store} from './redux/store'

import Main from './Main'
import { alert } from './redux/actions/alert'

const WrapperProvider = () => (
  <Provider store={store}>
    <Main />
  </Provider>
)

store.dispatch(alert('Soon, will be here a fantastic Music Room ...'))
export default WrapperProvider