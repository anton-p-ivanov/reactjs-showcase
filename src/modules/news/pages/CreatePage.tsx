import * as React from 'react';

import PageView from 'views/PageView';

const CreatePage: React.FC = () => {
  const title = 'Content :: Press-center :: News';

  return (
    <PageView title={title}>
      <h2>News create form</h2>
    </PageView>
  );
};

export default CreatePage;
