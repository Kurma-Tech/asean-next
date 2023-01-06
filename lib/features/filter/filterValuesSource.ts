import axios, { AxiosResponse } from 'axios';
import { apiConfig, apiPaths } from '../../core/constants/apiConstants';
import { FilterDefaultValuesType } from './filterValuestype';

export async function getFilterDefaultValuesSource(
  dataType: string
): Promise<FilterDefaultValuesType> {
  const response: AxiosResponse = await axios.post(
    apiPaths.baseUrl + apiPaths.getFilterDefaultUrl,
    { dataType: dataType },
    apiConfig
  );
  return response.data as FilterDefaultValuesType;
}
