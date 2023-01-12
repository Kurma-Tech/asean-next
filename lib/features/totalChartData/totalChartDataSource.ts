import axios, { AxiosResponse } from 'axios';
import { apiConfig, apiPaths } from '../../core/constants/apiConstants';
import {
  RequestTotalChartDataType,
  ResponseTotalChartDataType,
} from './totalChartDataTypes';

export async function getTotalChartData(
  requestData: RequestTotalChartDataType
): Promise<{
  data: ResponseTotalChartDataType;
}> {
  const response: AxiosResponse = await axios.post(
    apiPaths.baseUrl + apiPaths.getTotalChartDataUrl,
    {
      ...requestData,
    },
    apiConfig
  );
  var formattedData = {
    years: response.data['data'] ? Object.keys(response.data['data']) : [],
    counts: response.data['data'] ? Object.values(response.data['data']) : [],
  };
  return {
    data: formattedData as ResponseTotalChartDataType,
  };
}
