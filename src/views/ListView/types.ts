import React from 'react';

import type { TListViewData } from './store/types';
import type { TDataColumn } from 'components/DataTable/types';

export type TListViewProps = {
  endpoint: string;
  columns: TListViewColumn[];
  templates: TListViewTemplates;
};

export type TListViewColumn = TDataColumn;
export type TListViewTemplates = {
  row: React.FC<TListViewRow>;
  toolbar?: React.FC;
};

export type TListViewRow = {
  data: TListViewData;
};
