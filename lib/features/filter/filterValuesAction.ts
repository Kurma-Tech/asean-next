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
