import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import UserSession from '../../core/session/userSession';
import { getUserSource, loginSource, registerSource } from './authSource';
import {
  AuthReponseType,
  GetUserReponseType,
  LoginRequestType,
  RegisterRequestType,
  authTypes,
} from './authTypes';

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

export const showUserSettingsLayout = () => {
  return {
    type: authTypes.SHOW_USER_SETTINGS_LAYOUT,
  };
};

export const hideUserSettingsLayout = () => {
  return {
    type: authTypes.HIDE_USER_SETTINGS_LAYOUT,
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

export const loginSubmit = async (requestData: LoginRequestType) => {
  return async function (dispatch: Dispatch<AnyAction>) {
    try {
      const responseData: AuthReponseType = await loginSource(requestData);
      if (typeof window !== 'undefined') {
        UserSession.setToken(responseData.access_token);
      }
      if (responseData.access_token) {
        var userData: GetUserReponseType = await getUserSource(
          responseData.access_token
        );
        dispatch(
          setUser({
            ...userData,
          })
        );
      }
      setTimeout(function () {
        dispatch(hideAuthLayout());
      }, 1000);
    } catch (error) {
      dispatch(setErrorMessage((error as Error).message));
    }
  };
};

export const registerSubmit = async (requestData: RegisterRequestType) => {
  return async function (dispatch: Dispatch<AnyAction>) {
    try {
      const responseData: AuthReponseType = await registerSource(requestData);
      if (typeof window !== 'undefined') {
        UserSession.setToken(responseData.access_token);
      }
      if (responseData.access_token) {
        var userData: GetUserReponseType = await getUserSource(
          responseData.access_token
        );
        dispatch(
          setUser({
            ...userData,
          })
        );
      }
      setTimeout(function () {
        dispatch(hideAuthLayout());
      }, 1000);
    } catch (error) {
      dispatch(setErrorMessage((error as Error).message));
    }
  };
};

export const checkAuth = async () => {
  return async function (dispatch: Dispatch<AnyAction>) {
    if (typeof window === 'undefined') return;
    const token: string | null = UserSession.getToken();
    if (token) {
      var userData: GetUserReponseType = await getUserSource(token);
      dispatch(
        setUser({
          ...userData,
        })
      );
    }
  };
};

export const loggedIn = () => {
  return {
    type: authTypes.LOGGED_IN,
  };
};

export const setErrorMessage = (message: string) => {
  return {
    type: authTypes.SET_ERROR_MESSAGE,
    message: message,
  };
};

export const setUser = (userData: { name: string; email: string }) => {
  return {
    type: authTypes.SET_USER,
    ...userData,
  };
};

export const logOut = () => {
  if (typeof window !== 'undefined') {
    UserSession.removeToken();
  }
  return {
    type: authTypes.LOG_OUT,
  };
};
