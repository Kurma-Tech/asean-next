export const mapDataActionTypes = {
  UPDATE_MAP_DATA: 'UPDATE_MAP_DATA',
  CLEAR_MAP_STATE_DATA: 'CLEAR_MAP_STATE_DATA',
  ADD_PAGE: 'ADD_PAGE',
  CLEAR_PAGES: 'CLEAR_PAGES',
  REMOVE_REQUEST: 'REMOVE_REQUEST',
  CLEAR_REMOVE_REQEUST: 'CLEAR_REMOVE_REQEUST',
};

export interface RequestFilterMapDataType {
  searchText: string;
  dataType: string;
  country?: number;
  category?: number;
  group?: number;
  kind?: number;
  type?: number;
  year?: string;
}
