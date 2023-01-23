import { densityMapDataActionTypes } from './densityMapDataType';

export interface MapDataState {
  data: {}[];
  removeDensityRequest: boolean;
}

const initialState: MapDataState = {
  data: [],
  removeDensityRequest: false,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case densityMapDataActionTypes.UPDATE_DENSITY_MAP_DATA: {
      return {
        ...state,
        data: [...state.data, ...action.data],
        flag: true,
      };
    }
    case densityMapDataActionTypes.CLEAR_DENSITY_MAP_STATE_DATA: {
      return {
        ...state,
        data: [],
      };
    }
    case densityMapDataActionTypes.REMOVE_DENSITY_REQUEST: {
      return {
        ...state,
        removeDensityRequest: true,
      };
    }
    case densityMapDataActionTypes.CLEAR_DENSITY_REMOVE_REQEUST: {
      return {
        ...state,
        removeDensityRequest: false,
      };
    }
    default:
      return state;
  }
}
