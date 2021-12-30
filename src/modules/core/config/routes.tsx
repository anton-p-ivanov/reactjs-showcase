import DashboardPage from '../pages/DashboardPage';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  {
    path: '/',
    title: 'Dashboard',
    component: DashboardPage,
  },
];

export default routes;
