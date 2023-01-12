import { totalChartDataTypes } from './totalChartDataTypes';

export interface PopularCategoryState {
  years: string[];
  counts: number[];
}

const initialState: PopularCategoryState = {
  years: [],
  counts: [],
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case totalChartDataTypes.GET_TOTAL_CHART_DATA: {
      return {
        ...state,
        years: action.years,
        counts: action.counts,
      };
    }
    case totalChartDataTypes.CLEAT_TOTAL_CHART_DATA: {
      return {
        ...state,
        years: [],
        counts: [],
      };
    }
    default:
      return state;
  }
}
