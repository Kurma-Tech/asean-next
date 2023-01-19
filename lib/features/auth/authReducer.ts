import { authTypes } from './authTypes';

export interface PopularCategoryState {
  isAuthLayoutShown: boolean;
  isUserSettingsShown: boolean;
  isSignInForm: boolean;
  isLoggedIn: boolean;
  name?: string;
  email?: string;
  errorMessage?: string;
}

const initialState: PopularCategoryState = {
  isAuthLayoutShown: false,
  isUserSettingsShown: false,
  isSignInForm: true,
  isLoggedIn: false,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case authTypes.SET_ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: action.message,
      };
    }
    case authTypes.SHOW_AUTH_LAYOUT: {
      return {
        ...state,
        isAuthLayoutShown: true,
      };
    }
    case authTypes.HIDE_AUTH_LAYOUT: {
      return {
        ...state,
        isAuthLayoutShown: false,
      };
    }
    case authTypes.SHOW_USER_SETTINGS_LAYOUT: {
      return {
        ...state,
        isUserSettingsShown: true,
      };
    }
    case authTypes.HIDE_USER_SETTINGS_LAYOUT: {
      return {
        ...state,
        isUserSettingsShown: false,
      };
    }
    case authTypes.GO_TO_LOGIN_FORM: {
      return {
        ...state,
        isSignInForm: true,
        errorMessage: null,
      };
    }
    case authTypes.GO_TO_REGISTER_FORM: {
      return {
        ...state,
        isSignInForm: false,
        errorMessage: null,
      };
    }
    case authTypes.LOGGED_IN: {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case authTypes.LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        isUserSettingsShown: false,
        name: null,
        email: null,
      };
    }
    case authTypes.SET_USER: {
      return {
        ...state,
        isLoggedIn: true,
        name: action.name,
        email: action.email,
      };
    }
    default:
      return state;
  }
}
