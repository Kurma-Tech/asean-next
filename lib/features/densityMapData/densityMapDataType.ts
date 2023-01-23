export const densityMapDataActionTypes = {
  UPDATE_DENSITY_MAP_DATA: 'UPDATE_DENSITY_MAP_DATA',
  CLEAR_DENSITY_MAP_STATE_DATA: 'CLEAR_DENSITY_MAP_STATE_DATA',
  REMOVE_DENSITY_REQUEST: 'REMOVE_DENSITY_REQUEST',
  CLEAR_DENSITY_REMOVE_REQEUST: 'CLEAR_DENSITY_REMOVE_REQEUST',
};

export interface RequestFilterDensityMapDataType {
  dataType: string;
  country?: number;
  category?: number;
  group?: number;
  kind?: number;
  type?: number;
  year?: string;
}
