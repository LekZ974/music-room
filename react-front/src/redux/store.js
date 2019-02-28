import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducer from './reducers/reducer'

const middlewares = [thunk]

const composeFn = __DEV__ ? composeWithDevTools : compose

const store = composeFn(
  applyMiddleware(...middlewares)
)(createStore)(reducer)

export { store }
