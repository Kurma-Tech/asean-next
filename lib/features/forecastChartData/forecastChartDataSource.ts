import axios, { AxiosResponse } from 'axios';
import { apiConfig, apiPaths } from '../../core/constants/apiConstants';
import {
  RequestForecastChartDataType,
  ResponseForecastChartDataType,
} from './forecastChartDataTypes';

export async function getForecastChartData(
  requestData: RequestForecastChartDataType
): Promise<{
  data: ResponseForecastChartDataType;
}> {
  const response: AxiosResponse = await axios.post(
    apiPaths.baseUrl + apiPaths.getForecastDataUrl,
    {
      ...requestData,
    },
    apiConfig
  );

  if (response.data['success'] == false) {
    return {
      data: {
        keys: [],
        values: [],
      } as ResponseForecastChartDataType,
    };
  }

  return {
    data: (response.data['data'] ?? {
      keys: [],
      values: [],
    }) as ResponseForecastChartDataType,
  };
}
