import axios, { AxiosResponse } from 'axios';
import { apiConfig, apiPaths } from '../../core/constants/apiConstants';
import { RequestFilterDensityMapDataType } from './densityMapDataType';

export async function getFilteredDensityMapData(
  requestData: RequestFilterDensityMapDataType
): Promise<{
  data: {}[];
}> {
  const response: AxiosResponse = await axios.post(
    apiPaths.baseUrl + apiPaths.filterDenstiyMapDataUrl,
    {
      ...requestData,
    },
    apiConfig
  );
  return {
    data: response.data['data'] as {}[],
  };
}
