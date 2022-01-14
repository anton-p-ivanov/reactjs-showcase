import type { IListViewState } from './types';

const initialState: IListViewState = {
  status: 'IDLE',
  data: [],
  pagination: {
    page: 1,
    size: 20,
    total: 0,
  },
  isFiltered: false,
  timestamp: new Date().getTime(),
};

export default {
  initialState,
};
