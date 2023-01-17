export const apiConfig = {
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const apiPaths = {
  baseUrl: 'https://backend.aseanemergingindustries.com/api',
  getFilterDefaultUrl: '/filter/default',
  filterMapDataUrl: '/filter/mapdata',
  getPopularCategoryDataurl: '/report/popular',
  getTotalChartDataUrl: '/report/totalChart',
  getForecastDataUrl: '/report/predict',
};
