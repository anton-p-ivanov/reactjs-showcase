import { createSlice } from '@reduxjs/toolkit';

import defaults from './defaults';
import thunks from './thunks';

export const listViewSlice = createSlice({
  name: 'listView',
  initialState: defaults.initialState,
  reducers: {
    reset: (state) => ({ ...state, ...defaults.initialState }),
  },
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchData.pending, (state) => ({ ...state, status: 'FETCH_PENDING' }));
    builder.addCase(thunks.fetchData.fulfilled, (state, { payload }) => ({ ...state, ...payload, status: 'FETCH_SUCCEED' }));
    builder.addCase(thunks.fetchData.rejected, (state) => ({ ...state, status: 'FETCH_FAILED' }));
  },
});

// Action creators are generated for each case reducer function
export const { reset } = listViewSlice.actions;
export const { fetchData } = thunks;

export default listViewSlice.reducer;
