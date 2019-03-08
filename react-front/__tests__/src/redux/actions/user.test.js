import { USER_LOGIN, USER_LOGOUT, USER_RESET_PASSWORD, USER_SIGNUP } from "../../../../src/redux/actions/user"
import * as actions from "../../../../src/redux/actions/user"

describe('test USER_LOGIN action', ()=> {
  const user = {
    someData: 'a state of some data'
  }
  it('should test login function', () => {
    expect(actions.login(user)).toEqual({
      type: USER_LOGIN,
      user: {
        someData: 'a state of some data'
      }
    })
  })
  it('should test login function with no parameter', () => {
    expect(actions.login()).toEqual({
      type: USER_LOGIN,
    })
  })
});
describe('test USER_LOGOUT action', ()=> {
  it('should test logout function', ()=>{
    expect(actions.logout('a fake parameter')).toEqual({
      type:USER_LOGOUT,
      data: 'a fake parameter'
    })
  })
  it('should test logout function with no parameter', ()=>{
    expect(actions.logout()).toEqual({
      type:USER_LOGOUT,
    })
  })
});
describe('test USER_SIGNUP action', ()=> {
  const user = {
    someDataForSignUp: 'signUp with this data'
  }

  it('should test signUp function', ()=>{
    expect(actions.signUp(user)).toEqual({
      type:USER_SIGNUP,
      user: {
        someDataForSignUp: 'signUp with this data'
      }})
  })
  it('should test signUp function with no parameter', ()=>{
    expect(actions.signUp()).toEqual({
      type:USER_SIGNUP,
    })
  })
});
describe('test USER_RESET_PASSWORD action', ()=> {
  it('should test reset password function', ()=>{
    expect(actions.resetPassword("A string email")).toEqual({
      type:USER_RESET_PASSWORD,
      email: 'A string email'
    })
  })
  it('should test reset password function with no parameter', ()=>{
    expect(actions.resetPassword()).toEqual({
      type:USER_RESET_PASSWORD,
    })
  })
});
