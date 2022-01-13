import React from 'react';

import PageView from 'views/PageView';

const EditPage: React.FC = () => {
  const title = 'Content :: Press-center :: News';

  return (
    <PageView title={title}>
      <h2>News update form</h2>
    </PageView>
  );
};

export default EditPage;
