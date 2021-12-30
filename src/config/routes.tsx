import contentRoutes from '@content/config/routes';
import coreRoutes from '@core/config/routes';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  ...coreRoutes,
  ...contentRoutes,
];

export default routes;
