import { HYDRATE } from 'next-redux-wrapper';
import {
  FilterDefaultValuesType,
  filterValuesActionTypes,
} from './filterValuestype';

export interface FilterValuesState {
  searchText: string;
  dataType: string;
  country?: number;
  category?: number;
  group?: number;
  kind?: number;
  typeFilter?: number;
  year?: string;
  default_values?: FilterDefaultValuesType;
}

const initialState: FilterValuesState = {
  searchText: '',
  dataType: 'business',
  default_values: {
    data_types: [{ name: 'business' }, { name: 'patent' }, { name: 'journal' }],
  },
};

export default function reducer(state = initialState, action: any) {
  console.log(action);

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
    case filterValuesActionTypes.SEARCH_TEXT_CHANGE_ACTION: {
      return {
        ...state,
        searchText: action.searchText ?? '',
      };
    }
    case filterValuesActionTypes.COUNTRY_CHANGE_ACTION: {
      return {
        ...state,
        country: action.country,
      };
    }
    case filterValuesActionTypes.CLASSIFICATION_CHANGE_ACTION: {
      return {
        ...state,
        category: action.category,
      };
    }
    case filterValuesActionTypes.GROUP_CHANGE_ACTION: {
      return {
        ...state,
        group: action.group,
      };
    }
    case filterValuesActionTypes.TYPE_FILTER_CHANGE_ACTION: {
      return {
        ...state,
        typeFilter: action.typeFilter,
      };
    }
    case filterValuesActionTypes.KIND_CHANGE_ACTION: {
      return {
        ...state,
        kind: action.kind,
      };
    }
    case filterValuesActionTypes.YOUNG_CHANGE_ACTION: {
      return {
        ...state,
        year: action.year,
      };
    }
    default:
      return state;
  }
}
