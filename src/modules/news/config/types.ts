import { IDataMeta, IDataWorkflow } from 'config/types';

export type IDataNews = {
  uuid?: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  sort: number;
  locale: string;
  isPublished: boolean;
  isPinned: boolean;
  publishedAt: string;
  meta: IDataMeta[];
  workflow?: IDataWorkflow;
};
