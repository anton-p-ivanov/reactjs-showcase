import React from 'react';

import PageView from 'views/PageView';

const CopyPage: React.FC = () => {
  const title = 'Content :: Press-center :: News';

  return (
    <PageView title={title}>
      <h2>News copy form</h2>
    </PageView>
  );
};

export default CopyPage;
