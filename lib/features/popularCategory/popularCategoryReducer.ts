import {
  ResponsePopularCategoryType,
  popularCategoryActionTypes,
} from './popularCategoryType';

export interface PopularCategoryState {
  categories: ResponsePopularCategoryType[];
  limit: number;
}

const initialState: PopularCategoryState = {
  categories: [],
  limit: 10,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case popularCategoryActionTypes.GET_POPULAR_CATEGORY_DATA: {
      return {
        ...state,
        categories: [...action.categories],
        limit: action.limit,
      };
    }
    case popularCategoryActionTypes.CLEAR_POPULAR_CATEGORY_DATA: {
      return {
        categories: [],
        limit: 10,
      };
    }
    default:
      return state;
  }
}
