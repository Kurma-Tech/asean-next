import { createSlice } from '@reduxjs/toolkit';
import { FilterDefaultValuesType } from './filterValuestype';

export interface FilterValuesState {
  data_type: string;
  country?: number;
  category?: number;
  businessGroup?: number;
  businessType?: number;
  patentKind?: number;
  patentType?: number;
  year?: number;
  default_values?: FilterDefaultValuesType;
}

const initialState: FilterValuesState = {
  data_type: 'business',
  default_values: {
    data_types: [{ name: 'business' }, { name: 'patent' }, { name: 'journal' }],
  },
};

export const filterValuesSlice = createSlice({
  name: 'filterValues',
  initialState,
  reducers: {
    getFilterValues: (state, data: any) => {},
  },
});

export const { getFilterValues } = filterValuesSlice.actions;

export default filterValuesSlice.reducer;
