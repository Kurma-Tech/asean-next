export const authTypes = {
  LOGIN_SUBMIT: 'LOGIN_SUBMIT',
  REGISTER_SUBMIT: 'REGISTER_SUBMIT',
  SHOW_AUTH_LAYOUT: 'SHOW_AUTH_LAYOUT',
  HIDE_AUTH_LAYOUT: 'HIDE_AUTH_LAYOUT',
  SHOW_USER_SETTINGS_LAYOUT: 'SHOW_USER_SETTINGS_LAYOUT',
  HIDE_USER_SETTINGS_LAYOUT: 'HIDE_USER_SETTINGS_LAYOUT',
  GO_TO_LOGIN_FORM: 'GO_TO_LOGIN_FORM',
  GO_TO_REGISTER_FORM: 'GO_TO_REGISTER_FORM',
  LOGGED_IN: 'LOGGED_IN',
  LOG_OUT: 'LOG_OUT',
  SET_USER: 'SET_USER',
  SET_ERROR_MESSAGE: 'SET_ERROR_MESSAGE',
};

export interface LoginRequestType {
  email: string;
  password: string;
}

export interface RegisterRequestType {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface AuthReponseType {
  access_token: string;
}

export interface GetUserReponseType {
  name: string;
  email: string;
}
