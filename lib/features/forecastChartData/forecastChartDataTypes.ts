export const forecastChartDataTypes = {
  GET_FORECAST_CHART_DATA: 'GET_FORECAST_CHART_DATA',
  CLEAR_FORECAST_CHART_DATA: 'CLEAR_FORECAST_CHART_DATA',
};

export interface RequestForecastChartDataType {
  type: string;
  country?: number;
  category?: number;
}

export interface ResponseForecastChartDataType {
  keys: number[];
  values: number[];
}
