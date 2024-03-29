import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import ThunkMiddleware from 'redux-thunk';
import authReducer from '../features/auth/authReducer';
import denstiyMapDataReducer from '../features/densityMapData/densityMapDataReducer';
import emergingCategoryReducer from '../features/emergingCategory/emergingCategoryReducer';
import filterValuesReducer from '../features/filter/filterValuesReducer';
import forecastChartDataReducer from '../features/forecastChartData/forecastChartDataReducer';
import mapReducer from '../features/map/mapSlice';
import mapChangeReducer from '../features/mapChange/mapChangeSlice';
import mapDataReducer from '../features/mapData/mapDataReducer';
import popularCategoryReducer from '../features/popularCategory/popularCategoryReducer';
import reportReducer from '../features/report/reportSlice';
import totalChartDataReducer from '../features/totalChartData/totalChartDataReducer';

const middleware = [ThunkMiddleware];
export const store = configureStore({
  reducer: {
    map: mapReducer,
    mapChange: mapChangeReducer,
    filterValues: filterValuesReducer,
    mapData: mapDataReducer,
    densityMapData: denstiyMapDataReducer,
    popularCategory: popularCategoryReducer,
    emergingCategory: emergingCategoryReducer,
    totalChartData: totalChartDataReducer,
    forecastChartData: forecastChartDataReducer,
    report: reportReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore, { debug: false });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
