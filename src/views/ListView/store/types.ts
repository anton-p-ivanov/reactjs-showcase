import type { TListViewPagination } from 'views/ListView/components/ListViewPagination/types';
import type { TListViewSort } from 'views/ListView/components/ListViewSort/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TListViewData = any;

export type TListViewStatus =
  | 'IDLE'
  | 'FETCH_PENDING'
  | 'FETCH_SUCCEED'
  | 'FETCH_FAILED';

export interface IListViewState {
  status: TListViewStatus;
  data: TListViewData[];
  pagination: TListViewPagination;
  isFiltered: boolean;
  timestamp: number;
  sort?: TListViewSort;
}
