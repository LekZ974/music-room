import reducer from '../../../../src/redux/reducers/reducer'
import * as action from '../../../../src/redux/actions/user'
import { initialState as initialStateAlert } from '../../../../src/redux/reducers/alert';
import { initialState as initialStateUser } from '../../../../src/redux/reducers/user';
import { initialState as initialStateApplication } from '../../../../src/redux/reducers/application';

describe('root reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      alert: initialStateAlert,
      application: initialStateApplication,
      user: initialStateUser,
      form: {}
    })
  });

  it('should handle USER_LOGOUT', () => {
    expect(
      reducer({
        someData: 'like an user log'
      }, {
        type: action.USER_LOGOUT,
        randomData: {
          data: 'data for logout user',
          email: 'a random mail to log'
        }
      })
    ).toEqual({
      alert: initialStateAlert,
      application: initialStateApplication,
      user: initialStateUser,
      form: {}
    })
  });
})
