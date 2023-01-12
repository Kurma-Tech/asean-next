import { forecastChartDataTypes } from './forecastChartDataTypes';

export interface PopularCategoryState {
  keys: number[];
  values: number[];
}

const initialState: PopularCategoryState = {
  keys: [],
  values: [],
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case forecastChartDataTypes.GET_FORECAST_CHART_DATA: {
      return {
        ...state,
        keys: action.keys,
        values: action.values,
      };
    }
    case forecastChartDataTypes.CLEAR_FORECAST_CHART_DATA: {
      return {
        ...state,
        keys: [],
        values: [],
      };
    }
    default:
      return state;
  }
}
