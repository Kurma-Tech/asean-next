import { authTypes } from './authTypes';

export const showAuthLayout = () => {
  return {
    type: authTypes.SHOW_AUTH_LAYOUT,
  };
};

export const hideAuthLayout = () => {
  return {
    type: authTypes.HIDE_AUTH_LAYOUT,
  };
};

export const goToSignIn = () => {
  return {
    type: authTypes.GO_TO_LOGIN_FORM,
  };
};

export const gotToSignUp = () => {
  return {
    type: authTypes.GO_TO_REGISTER_FORM,
  };
};
