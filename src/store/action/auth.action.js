import {authTypes} from '../type/auth.type';

const signInRequest = (name) => {
  return {
    type: authTypes.SIGN_IN_REQUEST,
    name,
  };
};

const signInSuccess = (name, token) => {
  return {
    type: authTypes.SIGN_IN_SUCCESS,
    name,
    token,
  };
};

const signInFailure = () => {
  return {
    type: authTypes.SIGN_IN_FAILURE,
  };
};

const signOutRequest = () => {
  return {
    type: authTypes.SIGN_OUT_REQUEST,
  };
};

const signOutSuccess = () => {
  return {
    type: authTypes.SIGN_OUT_SUCCESS,
  };
};

const signOutFailure = () => {
  return {
    type: authTypes.SIGN_OUT_FAILURE,
  };
};

export const authActions = {
  signInRequest,
  signInSuccess,
  signInFailure,
  signOutRequest,
  signOutSuccess,
  signOutFailure,
};
