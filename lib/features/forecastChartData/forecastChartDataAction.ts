import { getForecastChartData } from './forecastChartDataSource';
import {
  RequestForecastChartDataType,
  forecastChartDataTypes,
} from './forecastChartDataTypes';

export const getForecastChartDataAction = async (
  requestData: RequestForecastChartDataType
) => {
  const responseData = await getForecastChartData(requestData);
  ApexCharts.exec('forecast-chart', 'updateOptions', {
    xaxis: {
      categories: responseData.data.keys,
      tickAmount: 10,
    },
  });
  ApexCharts.exec('forecast-chart', 'updateSeries', [
    {
      name: requestData.type.toUpperCase(),
      data: responseData.data.values,
    },
  ]);

  return {
    type: forecastChartDataTypes.GET_FORECAST_CHART_DATA,
    ...responseData.data,
  };
};

export const clearForecastChartAction = () => {
  return {
    type: forecastChartDataTypes.CLEAR_FORECAST_CHART_DATA,
  };
};
