export const totalChartDataTypes = {
  GET_TOTAL_CHART_DATA: 'GET_TOTAL_CHART_DATA',
  CLEAT_TOTAL_CHART_DATA: 'CLEAT_TOTAL_CHART_DATA',
};

export interface RequestTotalChartDataType {
  dataType: string;
  country?: number;
  year?: string;
}

export interface ResponseTotalChartDataType {
  years: string[];
  counts: number[];
}
