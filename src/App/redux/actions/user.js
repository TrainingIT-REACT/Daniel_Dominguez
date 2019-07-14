import types from "./types";

export const login = (username, password) => ({
  type: types.USER.LOGIN,
  payload: {
    username,
    password
  }
});

export const logout = () => ({
  type: types.USER.LOGOUT
});
