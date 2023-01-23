import axios, { AxiosResponse } from 'axios';
import { apiConfig, apiPaths } from '../../core/constants/apiConstants';
import {
  RequestEmergingCategoryType,
  ResponseEmergingCategoryType,
} from './emergingCategoryType';

export async function getEmergingCategoryData(
  requestData: RequestEmergingCategoryType
): Promise<{
  data: ResponseEmergingCategoryType[];
}> {
  const response: AxiosResponse = await axios.post(
    apiPaths.baseUrl + apiPaths.getEmergingCategoryDataurl,
    {
      ...requestData,
    },
    apiConfig
  );
  var formattedData = response.data['data'] ? response.data['data'] : [];
  return {
    data: formattedData as ResponseEmergingCategoryType[],
  };
}
