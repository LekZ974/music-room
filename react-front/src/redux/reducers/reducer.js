import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import alert from './alert';
import user from './user';

const appReducer = combineReducers({
  user,
  alert,
  form: formReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
