import { HYDRATE } from 'next-redux-wrapper';
import {
  FilterDefaultValuesType,
  filterValuesActionTypes,
} from './filterValuestype';

export interface FilterValuesState {
  dataType: string;
  country?: number;
  category?: number;
  businessGroup?: number;
  businessType?: number;
  patentKind?: number;
  patentType?: number;
  year?: number;
  default_values?: FilterDefaultValuesType;
}

const initialState: FilterValuesState = {
  dataType: 'business',
  default_values: {
    data_types: [{ name: 'business' }, { name: 'patent' }, { name: 'journal' }],
  },
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case HYDRATE: {
      return {
        ...state,
        default_values: action.payload.filterValues.default_values,
      };
    }
    case filterValuesActionTypes.DATASET_CHANGE_ACTION: {
      return {
        ...state,
        dataType: action.dataType,
        default_values: {
          data_types: state.default_values?.data_types,
          ...action.default_values,
        },
      };
    }
    default:
      return state;
  }
}
