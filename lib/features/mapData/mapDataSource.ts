import axios, { AxiosResponse } from 'axios';
import { apiConfig, apiPaths } from '../../core/constants/apiConstants';
import { RequestFilterMapDataType } from './mapDataType';

export async function getFilteredMapData(
  requestData: RequestFilterMapDataType,
  paginationLink?: string
): Promise<{
  data: {}[];
  paginationLink: string;
}> {
  const response: AxiosResponse = await axios.post(
    paginationLink
      ? paginationLink
      : apiPaths.baseUrl + apiPaths.filterMapDataUrl,
    {
      ...requestData,
      paginationLimit: 60000,
    },
    apiConfig
  );
  const reponseType =
    requestData.dataType == 'business'
      ? 'businesses'
      : requestData.dataType == 'patent'
      ? 'patents'
      : 'journals';
  var formattedData = response.data[reponseType]['data']
    ? (response.data[reponseType]['data'] as []).map((business, index) => {
        return {
          type: 'Feature',
          geometry: {
            coordinates: [business['y'], business['x']],
            type: 'Point',
          },
        };
      })
    : [];
  return {
    data: formattedData as {}[],
    paginationLink: response.data[reponseType]['next_page_link'],
  };
}
