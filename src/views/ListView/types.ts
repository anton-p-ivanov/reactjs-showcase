import React from 'react';

import type { TListViewSort } from './components/ListViewSort/types';
import type { TListViewData } from './store/types';
import type { TDataColumn } from 'components/DataTable/types';

export type TListViewProps = {
  settings: IListViewSettings;
};

export type TListViewColumn = TDataColumn;
export type TListViewTemplates = {
  row: React.FC<TListViewRow>;
  toolbar?: React.FC;
};

export type TListViewRow = {
  data: TListViewData;
};

export interface IListViewSettings {
  endpoint: string;
  sort: TListViewSort;
  templates: TListViewTemplates;
  columns: TListViewColumn[];
}
