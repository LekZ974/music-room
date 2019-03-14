import { USER_LOGIN, USER_SIGNUP } from '../actions/user';

export const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
};

export default function UserReducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        ...action.user,
      };
    }
    case USER_SIGNUP: {
      return {
        ...state,
        ...action.user,
      };
    }
    default:
      return state;
  }
}
