import { getEmergingCategoryData } from './emergingCategorySource';
import {
  RequestEmergingCategoryType,
  emergingCategoryActionTypes,
} from './emergingCategoryType';

export const getEmergingCategoryDataAction = async (
  requestData: RequestEmergingCategoryType
) => {
  const responseData = await getEmergingCategoryData(requestData);
  return {
    type: emergingCategoryActionTypes.GET_EMERGING_CATEGORY_DATA,
    categories: responseData.data,
  };
};

export const clearEmergingData = () => {
  return {
    type: emergingCategoryActionTypes.CLEAR_EMERGING_CATEGORY_DATA,
  };
};
