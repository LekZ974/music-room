export const USER_LOGIN = 'user/LOGIN';
export const USER_SIGNUP = 'user/SIGNUP';
export const USER_LOGOUT = 'user/LOGOUT';

export const login = user => ({
  type: USER_LOGIN,
  user,
});

export const signUp = user => ({
  type: USER_SIGNUP,
  user,
});

export const logout = user => ({
  type: USER_LOGOUT,
  user,
});
