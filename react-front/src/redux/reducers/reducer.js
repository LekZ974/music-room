import { combineReducers } from 'redux'

import alert from './alert.js'

const appReducer = combineReducers({
  alert,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
