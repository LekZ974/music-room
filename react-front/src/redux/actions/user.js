export const USER_LOGIN = 'user/LOGIN';

export const login = user => ({
  type: USER_LOGIN,
  user,
});
