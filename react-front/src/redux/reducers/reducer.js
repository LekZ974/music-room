import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import alert from './alert';
import user from './user';
import application from './application';
import { USER_LOGOUT } from '../actions/user';

const appReducer = combineReducers({
  user,
  alert,
  application,
  form: formReducer,
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
