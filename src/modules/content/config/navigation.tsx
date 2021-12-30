import type { TNavItem } from 'config/types';

const navigation: TNavItem[] = [
  {
    title: 'Content',
    items: [
      {
        title: 'Press-center',
        icon: 'database',
        items: [
          {
            title: 'News',
            route: '/content/news',
          },
          {
            title: 'Articles',
            route: '/content/articles',
          },
        ],
      },
      {
        title: 'Vacancies',
        icon: 'database',
        items: [
          {
            title: 'List of vacancies',
            route: '/content/vacancies/vacancies',
          },
          {
            title: 'Vacancies groups',
            route: '/content/vacancies/groups',
          },
          {
            title: 'Vacancies responses',
            route: '/content/vacancies/responses',
          },
        ],
      },
    ],
  },
];

export default navigation;
