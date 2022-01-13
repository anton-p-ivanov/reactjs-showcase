import * as pages from '../pages';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  {
    path: '/',
    component: pages.ListPage,
  },
  {
    path: '/create',
    component: pages.CreatePage,
  },
  {
    path: '/:uuid/edit',
    component: pages.EditPage,
  },
  {
    path: '/:uuid/copy',
    component: pages.CopyPage,
  },
];

export default routes.map((route) => ({ ...route, path: `/news/${route.path.replace(/^\//, '')}` }));
