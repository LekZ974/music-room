import reducer from '../../../../src/redux/reducers/user'
import * as action from '../../../../src/redux/actions/user'
import { USER_SIGNUP } from '../../../../src/redux/actions/user'

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
    })
  })

  it('should handle USER_LOGIN', () => {
    expect(
      reducer([], {
        type: action.USER_LOGIN,
        user: {
          data: 'data for log user',
          email: 'a random mail to log'
        }
      })
    ).toEqual(
      {
        data: 'data for log user',
        email: 'a random mail to log'
      }
    )

    expect(
      reducer(
        {
          id: 'an Id',
          firstName: 'John',
          lastName: 'Jones',
          email: 'an email',
        },
        {
          type: action.USER_LOGIN,
          user : {
            id: 'a new Id',
            firstName: 'Connor',
            lastName: 'McGregor',
            email: 'an other email'
          },

        })
    ).toEqual(
      {
        id: 'a new Id',
        firstName: 'Connor',
        lastName: 'McGregor',
        email: 'an other email'
      },
    )
  })
  it('should handle USER_SIGNUP', () => {
    expect(
      reducer([], {
        type: action.USER_SIGNUP,
        user: {
          something: 'sky is blue'
        }
      })
    ).toEqual(
      {
        something: 'sky is blue'
      }
    )

    expect(
      reducer(
        {
          otherThing: 'sun is yellow',
          otherRandomThing: 'weed is green'
        },
        {
          type: action.USER_SIGNUP,
          user : {
            otherThing: '42'
          },
        })
    ).toEqual(
      {
        otherThing: '42',
        otherRandomThing: 'weed is green'
      },
    )
  })
})
