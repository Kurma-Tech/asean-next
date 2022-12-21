import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

export interface MapState {
  latitude: number;
  longitude: number;
  zoom: number;
}

const initialState: MapState = {
  latitude: 2.37304225637002,
  longitude: 111.0984168893686,
  zoom: 5,
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    updateLocation: (state, action: PayloadAction<Array<number>>) => {
      state.latitude = action.payload[0];
      state.longitude = action.payload[1];
    },
    updateZoom: (state, action: PayloadAction<number>) => {
      state.zoom = action.payload;
    },
  },
});

export const { updateLocation, updateZoom } = mapSlice.actions;

export const selectLatitude = (state: RootState) => state.map.latitude;
export const selectLongitude = (state: RootState) => state.map.longitude;
export const selectZoom = (state: RootState) => state.map.zoom;

export default mapSlice.reducer;
