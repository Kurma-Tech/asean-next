export const apiConfig = {
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const apiConfigWithAuth = (token: string) => {
  return {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: 'Bearer ' + token,
    },
  };
};

export const apiPaths = {
  baseUrl: 'https://backend.aseanemergingindustries.com/api',
  getFilterDefaultUrl: '/filter/default',
  filterMapDataUrl: '/filter/mapdata',
  getPopularCategoryDataurl: '/report/popular',
  getEmergingCategoryDataurl: '/report/emerging',
  getTotalChartDataUrl: '/report/totalChart',
  getForecastDataUrl: '/report/predict',
  loginUrl: '/login',
  registerUrl: '/register',
  getUserUrl: '/user',
};
