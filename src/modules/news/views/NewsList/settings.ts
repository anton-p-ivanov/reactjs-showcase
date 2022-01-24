import { IListViewSettings } from 'views/ListView/types';

import { NewsListRow, NewsListToolbar } from './components';

import type { TListViewColumn, TListViewTemplates } from 'views/ListView/types';

const columns: TListViewColumn[] = [
  { name: 'title', title: 'Title' },
  { name: 'publishedAt', title: 'Published at' },
  { name: 'locale', title: 'Locale' },
  { name: 'isPublished', title: 'Is publ.' },
  { name: 'updatedAt', title: 'Updated at' },
  { name: 'context', title: '' },
];

const templates: TListViewTemplates = {
  row: NewsListRow,
  toolbar: NewsListToolbar,
};

const settings: IListViewSettings = {
  endpoint: '/content/news',
  sort: {
    sortBy: 'updatedAt',
    sortOrder: 'DESC',
  },
  columns,
  templates,
};

export default settings;
