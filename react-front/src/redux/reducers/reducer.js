import { combineReducers } from 'redux';

import alert from './alert';

const appReducer = combineReducers({
  alert,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
