import { USER_LOGIN } from '../actions/user';

const initialState = {
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
    default:
      return state;
  }
}
