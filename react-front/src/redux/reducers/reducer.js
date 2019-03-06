import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import alert from './alert';
import user from './user';
import { USER_LOGOUT } from '../actions/user';
import application from './application';

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
