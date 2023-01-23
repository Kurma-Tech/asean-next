import {
  ResponseEmergingCategoryType,
  emergingCategoryActionTypes,
} from './emergingCategoryType';

export interface EmergingCategoryState {
  categories: ResponseEmergingCategoryType[];
}

const initialState: EmergingCategoryState = {
  categories: [],
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case emergingCategoryActionTypes.GET_EMERGING_CATEGORY_DATA: {
      return {
        ...state,
        categories: [...action.categories],
      };
    }
    case emergingCategoryActionTypes.CLEAR_EMERGING_CATEGORY_DATA: {
      return {
        categories: [],
      };
    }
    default:
      return state;
  }
}
