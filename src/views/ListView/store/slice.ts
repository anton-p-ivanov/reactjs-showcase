import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import defaults from './defaults';
import thunks from './thunks';

import type { TListViewSort } from '../components/ListViewSort/types';

export const listViewSlice = createSlice({
  name: 'listView',
  initialState: defaults.initialState,
  reducers: {
    reset: (state) => ({ ...state, ...defaults.initialState }),
    refresh: (state) => ({ ...state, timestamp: (new Date()).getTime() }),
    applySorting: (state, action: PayloadAction<TListViewSort>) => ({
      ...state,
      sort: action.payload,
      timestamp: new Date().getTime(),
    }),
    navigateToPage: (state, action: PayloadAction<number>) => (
      { ...state, pagination: { ...state.pagination, page: action.payload } }
    ),
  },
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchData.pending, (state) => ({ ...state, status: 'FETCH_PENDING' }));
    builder.addCase(thunks.fetchData.fulfilled, (state, { payload }) => ({ ...state, ...payload, status: 'FETCH_SUCCEED' }));
    builder.addCase(thunks.fetchData.rejected, (state) => ({ ...state, status: 'FETCH_FAILED' }));
  },
});

export const { fetchData } = thunks;

export default listViewSlice.reducer;
