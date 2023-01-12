import { getFilterDefaultValuesSource } from './filterValuesSource';
import {
  FilterDefaultValuesType,
  filterValuesActionTypes,
} from './filterValuestype';

export const changeDataset = async (dataType: string) => {
  const responseData: FilterDefaultValuesType =
    await getFilterDefaultValuesSource(dataType);

  return {
    type: filterValuesActionTypes.DATASET_CHANGE_ACTION,
    dataType: dataType,
    default_values: responseData,
  };
};

export const changeSearchText = (searchText: string) => {
  return {
    type: filterValuesActionTypes.SEARCH_TEXT_CHANGE_ACTION,
    searchText: searchText,
  };
};

export const changeCountry = (country: string) => {
  return {
    type: filterValuesActionTypes.COUNTRY_CHANGE_ACTION,
    country: country,
  };
};

export const changeCategory = (category: string) => {
  return {
    type: filterValuesActionTypes.CLASSIFICATION_CHANGE_ACTION,
    category: category,
  };
};

export const changeGroup = (group: string) => {
  return {
    type: filterValuesActionTypes.GROUP_CHANGE_ACTION,
    group: group,
  };
};

export const changeType = (typeFilter: string) => {
  return {
    type: filterValuesActionTypes.TYPE_FILTER_CHANGE_ACTION,
    typeFilter: typeFilter,
  };
};

export const changeKind = (kind: string) => {
  return {
    type: filterValuesActionTypes.KIND_CHANGE_ACTION,
    kind: kind,
  };
};

export const changeYoung = (year: string) => {
  return {
    type: filterValuesActionTypes.YOUNG_CHANGE_ACTION,
    year: year,
  };
};
