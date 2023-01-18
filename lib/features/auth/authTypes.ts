export const authTypes = {
  LOGIN_SUBMIT: 'LOGIN_SUBMIT',
  REGISTER_SUBMIT: 'REGISTER_SUBMIT',
  SHOW_AUTH_LAYOUT: 'SHOW_AUTH_LAYOUT',
  HIDE_AUTH_LAYOUT: 'HIDE_AUTH_LAYOUT',
  GO_TO_LOGIN_FORM: 'GO_TO_LOGIN_FORM',
  GO_TO_REGISTER_FORM: 'GO_TO_REGISTER_FORM',
};

export interface LoginRequestType {
  email: string;
  password: string;
}
