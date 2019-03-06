import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/reducer';

const middlewares = [thunk];

const persistConfig = {
  key: 'root',
  storage,
  timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeFn = __DEV__ ? composeWithDevTools : compose;

const store = composeFn(applyMiddleware(...middlewares))(createStore)(persistedReducer);

export const persistor = persistStore(store);

export default store;
