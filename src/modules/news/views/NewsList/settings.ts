import { NewsListRow } from './components';

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
};

export default {
  columns,
  templates,
};
