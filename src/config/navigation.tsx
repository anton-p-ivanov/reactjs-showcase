import contentNavigation from '@content/config/navigation';
import coreNavigation from '@core/config/navigation';

import type { TNavItem } from 'config/types';

const navigation: TNavItem[] = [
  ...coreNavigation,
  ...contentNavigation,
];

export default navigation;
