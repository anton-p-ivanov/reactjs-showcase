import { createAsyncThunk } from '@reduxjs/toolkit';

import API from 'lib/api';

import type { TListViewData } from 'views/ListView/store/types';

const fetchData = createAsyncThunk(
  'listView/fetchData',
  async (url: string) => {
    try {
      const response = await API.request<TListViewData[]>({ method: 'GET', url });

      return {
        data: response.data || [],
        pagination: {
          total: +response.headers['x-pagination-total'],
          size: +response.headers['x-pagination-size'],
          page: +response.headers['x-pagination-page'],
        },
        isFiltered: response.headers['x-results-filtered'] === '1',
      };
    } catch (e) {
      return {};
    }
  },
);

export default {
  fetchData,
};
