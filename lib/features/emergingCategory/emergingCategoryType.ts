export const emergingCategoryActionTypes = {
  GET_EMERGING_CATEGORY_DATA: 'GET_EMERGING_CATEGORY_DATA',
  CLEAR_EMERGING_CATEGORY_DATA: 'CLEAR_EMERGING_CATEGORY_DATA',
};

export interface RequestEmergingCategoryType {
  dataType: string;
  country?: number;
  year?: string;
}

export interface ResponseEmergingCategoryType {
  key: string;
  value: number;
}
