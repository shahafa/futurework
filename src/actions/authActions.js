import { Base64 } from 'js-base64/base64';
import * as types from './actionTypes';

export const resetAuthState = () => ({
  type: types.RESET_AUTH_STATE,
});

export const login = (email, password) => ({
  type: types.LOGIN_REQUEST,
  payload: {
    email,
    password: Base64.encode(password),
  },
});
