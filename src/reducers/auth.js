import jwtDecode from 'jwt-decode';
import * as types from 'actions/actionTypes';

const initialState = {
  isAuthenticating: false,
  isAuthenticated: false,
  isSigningUp: false,
  token: null,
  errorCode: null,
  errorText: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.RESET_AUTH_STATE:
      return Object.assign({}, initialState);
    default:
      return state;
  }
};

export default auth;
