export const USER_LOGIN = 'user/LOGIN';
export const USER_SIGNUP = 'user/SIGNUP';
export const USER_LOGOUT = 'user/LOGOUT';
export const USER_RESET_PASSWORD = 'user/RESET_PASSWORD';

export const login = user => ({
  type: USER_LOGIN,
  user,
});

export const signUp = user => ({
  type: USER_SIGNUP,
  user,
});

export const logout = data => ({
  type: USER_LOGOUT,
  data,
});

export const resetPassword = email => ({
  type: USER_RESET_PASSWORD,
  email,
});
