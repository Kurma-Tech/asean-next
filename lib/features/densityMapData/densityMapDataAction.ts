import { FilterValuesState } from '../filter/filterValuesReducer';
import { getFilteredDensityMapData } from './densityMapDataSource';
import { densityMapDataActionTypes } from './densityMapDataType';

export const updateDensityMapData = async (
  filterStateData: FilterValuesState
) => {
  const responseData = await getFilteredDensityMapData({
    dataType: filterStateData.dataType,
    country: filterStateData.country,
    category: filterStateData.category,
    group: filterStateData.group,
    kind: filterStateData.kind,
    type: filterStateData.typeFilter,
    year: filterStateData.year,
  });
  return {
    type: densityMapDataActionTypes.UPDATE_DENSITY_MAP_DATA,
    data: responseData.data,
  };
};

export const clearDensityMapStateData = () => {
  return {
    type: densityMapDataActionTypes.CLEAR_DENSITY_MAP_STATE_DATA,
  };
};

export const removeDensityRequest = () => {
  return {
    type: densityMapDataActionTypes.REMOVE_DENSITY_REQUEST,
  };
};

export const clearDensityRemoveRequest = () => {
  return {
    type: densityMapDataActionTypes.CLEAR_DENSITY_REMOVE_REQEUST,
  };
};
