import { getPopularCategoryData } from './popularCategorySource';
import {
  RequestPopularCategoryType,
  popularCategoryActionTypes,
} from './popularCategoryType';

export const getPopularCategoryDataAction = async (
  requestData: RequestPopularCategoryType
) => {
  const responseData = await getPopularCategoryData(requestData);
  return {
    type: popularCategoryActionTypes.GET_POPULAR_CATEGORY_DATA,
    categories: responseData.data,
    limit: requestData.limit,
  };
};

export const clearPopularData = () => {
  return {
    type: popularCategoryActionTypes.CLEAR_POPULAR_CATEGORY_DATA,
  };
};
