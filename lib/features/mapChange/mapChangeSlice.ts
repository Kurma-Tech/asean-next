import { createSlice } from '@reduxjs/toolkit';

export interface MapChangeState {
  isDensity: boolean;
  isMapSettingShown: boolean;
}

const initialState: MapChangeState = {
  isDensity: true,
  isMapSettingShown: false,
};

export const mapSlice = createSlice({
  name: 'mapChange',
  initialState,
  reducers: {
    changeToDenstiy: (state) => {
      state.isDensity = true;
      state.isMapSettingShown = false;
    },
    changeToHeat: (state) => {
      state.isDensity = false;
      state.isMapSettingShown = false;
    },
    openMapSettings: (state) => {
      state.isMapSettingShown = true;
    },
    closeMapSettings: (state) => {
      state.isMapSettingShown = false;
    },
  },
});

export const {
  changeToDenstiy,
  changeToHeat,
  openMapSettings,
  closeMapSettings,
} = mapSlice.actions;

export default mapSlice.reducer;
