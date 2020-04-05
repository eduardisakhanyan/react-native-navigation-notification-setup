import {authTypes} from '../type/auth.type';

const initialState = {
  loggedIn: false,
  name: null,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case authTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        name: action.name,
        token: action.token,
        loggedIn: true,
        loading: false,
      };
    case authTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case authTypes.SIGN_OUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case authTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
        name: null,
        token: null,
        loading: false,
      };
    case authTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
