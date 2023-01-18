import { authTypes } from './authTypes';

export interface PopularCategoryState {
  isAuthLayoutShown: boolean;
  isSignInForm: boolean;
}

const initialState: PopularCategoryState = {
  isAuthLayoutShown: false,
  isSignInForm: true,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
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
    case authTypes.GO_TO_LOGIN_FORM: {
      return {
        ...state,
        isSignInForm: true,
      };
    }
    case authTypes.GO_TO_REGISTER_FORM: {
      return {
        ...state,
        isSignInForm: false,
      };
    }
    default:
      return state;
  }
}
