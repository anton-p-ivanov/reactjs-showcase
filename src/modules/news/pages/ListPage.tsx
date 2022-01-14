import React from 'react';

import PageView from 'views/PageView';

import NewsList from '../views/NewsList';

const ListPage: React.FC = () => {
  const title = 'News list';

  return (
    <PageView title={title}>
      <NewsList />
    </PageView>
  );
};

export default ListPage;
