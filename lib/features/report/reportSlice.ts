import { createSlice } from '@reduxjs/toolkit';

export interface ReportState {
  isReportVisible: boolean;
  isReportNew: boolean;
}

const initialState: ReportState = {
  isReportVisible: false,
  isReportNew: false,
};

export const reportSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    showReport: (state) => {
      state.isReportVisible = true;
    },
    hideReport: (state) => {
      state.isReportVisible = false;
    },
    requestReportNew: (state) => {
      state.isReportNew = true;
      state.isReportVisible = true;
    },
    clearReportNew: (state) => {
      state.isReportNew = false;
    },
  },
});

export const { showReport, hideReport, requestReportNew, clearReportNew } =
  reportSlice.actions;

export default reportSlice.reducer;
