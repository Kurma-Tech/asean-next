export const apiConfig = {
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const apiPaths = {
  baseUrl: 'http://13.250.218.164/api',
  baseUrl2: 'http://18.136.147.228/api/v1',
  getFilterDefaultUrl: '/filter/default',
  filterMapDataUrl: '/filter/mapdata',
  getPopularCategoryDataurl: '/report/popular',
  getTotalChartDataUrl: '/report/totalChart',
  getForecastDataUrl: '/predict',
};
