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
    apiPaths.baseUrl2 + apiPaths.getForecastDataUrl,
    {
      ...requestData,
    },
    apiConfig
  );

  return {
    data: (response.data['prediction_data'] ?? {
      keys: [],
      values: [],
    }) as ResponseForecastChartDataType,
  };
}
