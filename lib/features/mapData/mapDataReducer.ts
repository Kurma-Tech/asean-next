import { mapDataActionTypes } from './mapDataType';

export interface MapDataState {
  business: {}[];
  paginationLink: string | null;
  page: number;
  removeRequest: boolean;
  flag: boolean;
}

const initialState: MapDataState = {
  business: [],
  paginationLink: null,
  page: 0,
  removeRequest: false,
  flag: false,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case mapDataActionTypes.UPDATE_MAP_DATA: {
      console.log('ere');
      return {
        ...state,
        business: [...state.business, ...action.business],
        paginationLink: action.paginationLink,
        flag: true,
      };
    }
    case mapDataActionTypes.CLEAR_MAP_STATE_DATA: {
      return {
        ...state,
        business: [],
        flag: false,
      };
    }
    case mapDataActionTypes.ADD_PAGE: {
      console.log('ADD_PAGE' + state.page);

      return {
        ...state,
        page: state.page + 1,
      };
    }
    case mapDataActionTypes.CLEAR_PAGES: {
      return {
        ...state,
        page: 0,
      };
    }
    case mapDataActionTypes.REMOVE_REQUEST: {
      return {
        ...state,
        removeRequest: true,
      };
    }
    case mapDataActionTypes.CLEAR_REMOVE_REQEUST: {
      return {
        ...state,
        removeRequest: false,
      };
    }
    default:
      return state;
  }
}
