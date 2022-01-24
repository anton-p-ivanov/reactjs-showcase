import React from 'react';

import { ListViewToolbar } from 'views/ListView/components';

const NewsListToolbar: React.FC = ({ children }) => (
  <ListViewToolbar createUrl="/content/news/create" createLabel="Add news item">
    {children}
  </ListViewToolbar>
);

export default NewsListToolbar;
