import React from 'react';

import PageView from 'views/PageView';

const ListPage: React.FC = () => {
  const title = 'Content :: Press-center :: News';

  return (
    <PageView title={title}>
      <h2>News list</h2>
    </PageView>
  );
};

export default ListPage;
