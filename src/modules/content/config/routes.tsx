import newsRoutes from '@news/config/routes';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  ...newsRoutes,
];

export default routes.map((route) => ({ ...route, path: `/content/${route.path.replace(/^\//, '')}` }));
