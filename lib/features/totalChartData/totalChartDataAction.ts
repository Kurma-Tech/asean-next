import { getTotalChartData } from './totalChartDataSource';
import {
  RequestTotalChartDataType,
  totalChartDataTypes,
} from './totalChartDataTypes';

export const getTotalChartDataAction = async (
  requestData: RequestTotalChartDataType
) => {
  const responseData = await getTotalChartData(requestData);
  ApexCharts.exec('total-chart', 'updateOptions', {
    xaxis: {
      categories: responseData.data.years,
    },
  });
  ApexCharts.exec('total-chart', 'updateSeries', [
    {
      name: requestData.dataType.toUpperCase(),
      data: responseData.data.counts,
    },
  ]);

  return {
    type: totalChartDataTypes.GET_TOTAL_CHART_DATA,
    ...responseData.data,
  };
};

export const clearTotalChartAction = () => {
  return {
    type: totalChartDataTypes.CLEAT_TOTAL_CHART_DATA,
  };
};
