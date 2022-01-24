import type { TListViewColumn } from '../../types';

export type TListViewSort = {
  [key: string]: string;
  sortBy: string;
  sortOrder: 'ASC' | 'DESC';
};

export type TListViewSortProps = {
  columns: TListViewColumn[],
};
