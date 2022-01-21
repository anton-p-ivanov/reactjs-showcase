import { createAsyncThunk } from '@reduxjs/toolkit';

import API from 'lib/api';

import type { TListViewSort } from '../components/ListViewSort/types';
import type { TListViewData } from './types';

interface IFetchDataParams {
  endpoint: string,
  page: number,
  size: number,
  sort?: TListViewSort,
}

const fetchData = createAsyncThunk(
  'listView/fetchData',
  async (config: IFetchDataParams) => {
    const params: Record<string, string> = {
      page: config.page.toString(),
      size: config.size.toString(),
    };

    if (config.sort) {
      params.sort = (config.sort.sortOrder === 'DESC' ? '-' : '') + config.sort.sortBy;
    }

    try {
      const response = await API.request<TListViewData[]>({
        method: 'GET',
        url: config.endpoint,
        params,
      });

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
