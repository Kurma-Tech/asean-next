import axios, { AxiosResponse } from 'axios';
import { apiConfig, apiPaths } from '../../core/constants/apiConstants';
import {
  RequestPopularCategoryType,
  ResponsePopularCategoryType,
} from './popularCategoryType';

export async function getPopularCategoryData(
  requestData: RequestPopularCategoryType
): Promise<{
  data: ResponsePopularCategoryType[];
}> {
  const response: AxiosResponse = await axios.post(
    apiPaths.baseUrl + apiPaths.getPopularCategoryDataurl,
    {
      ...requestData,
    },
    apiConfig
  );
  var formattedData = response.data['data'] ? response.data['data'] : [];
  return {
    data: formattedData as ResponsePopularCategoryType[],
  };
}
