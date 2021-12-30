import type { TNavItem } from 'config/types';

const navigation: TNavItem[] = [
  {
    title: 'Dashboard',
    icon: 'home',
    route: '/',
  },
  {
    title: 'System',
    items: [
      {
        title: 'Mail templates',
        icon: 'layers',
        route: '/mail/templates',
      },
      {
        title: 'Web-forms',
        icon: 'layers',
        route: '/forms',
      },
    ],
  },
];

export default navigation;
