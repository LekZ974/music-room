import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppLoading } from 'expo';
import store, { persistor } from './redux/store';

import Main from './Main';
import { alert } from './redux/actions/alert';

const WrapperProvider = () => (
  <Provider store={store}>
    <PersistGate loading={<AppLoading />} persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>
);

store.dispatch(alert('Soon, will be here a fantastic Music Room ...'));
export default WrapperProvider;
