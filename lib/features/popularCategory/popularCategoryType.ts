export const popularCategoryActionTypes = {
  GET_POPULAR_CATEGORY_DATA: 'GET_POPULAR_CATEGORY_DATA',
  CLEAR_POPULAR_CATEGORY_DATA: 'CLEAR_POPULAR_CATEGORY_DATA',
};

export interface RequestPopularCategoryType {
  dataType: string;
  country?: number;
  year?: string;
  limit: number;
}

export interface ResponsePopularCategoryType {
  key: string;
  value: number;
}
