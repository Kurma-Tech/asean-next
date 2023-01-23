import { FilterValuesState } from '../filter/filterValuesReducer';
import { getFilteredMapData } from './mapDataSource';
import { mapDataActionTypes } from './mapDataType';

export const updateMapData = async (
  filterStateData: FilterValuesState,
  paginationLink?: string
) => {
  const responseData = await getFilteredMapData(
    {
      searchText: filterStateData.searchText,
      dataType: filterStateData.dataType,
      country: filterStateData.country,
      category: filterStateData.category,
      group: filterStateData.group,
      kind: filterStateData.kind,
      type: filterStateData.typeFilter,
      year: filterStateData.year,
    },
    paginationLink
  );

  return {
    type: mapDataActionTypes.UPDATE_MAP_DATA,
    // business: [
    //   {
    //     type: 'Feature',
    //     geometry: {
    //       coordinates: [121.03219, 14.68279],
    //       type: 'Point',
    //     },
    //     properties: {
    //       id: 313048,
    //     },
    //   },
    // ],
    paginationLink: responseData.paginationLink,
    business: responseData.data,
  };
};

export const clearMapStateData = () => {
  return {
    type: mapDataActionTypes.CLEAR_MAP_STATE_DATA,
  };
};

export const removeRequest = () => {
  return {
    type: mapDataActionTypes.REMOVE_REQUEST,
  };
};

export const clearRemoveRequest = () => {
  return {
    type: mapDataActionTypes.CLEAR_REMOVE_REQEUST,
  };
};

export const addPage = () => {
  return {
    type: mapDataActionTypes.ADD_PAGE,
  };
};

export const clearPages = () => {
  return {
    type: mapDataActionTypes.CLEAR_PAGES,
  };
};
