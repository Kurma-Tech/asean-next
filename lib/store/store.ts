import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import filterValuesReducer from '../features/filter/filterValuesReducer';
import mapReducer from '../features/map/mapSlice';

export const store = configureStore({
  reducer: {
    map: mapReducer,
    filterValues: filterValuesReducer,
  },
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore, { debug: true });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
