import React from 'react';

import config from 'config';
import PageView from 'views/PageView';

const DashboardPage: React.FC = () => {
  const title = 'Dashboard';

  return (
    <PageView title={title}>
      {`This is Dashboard - main page of ${config.title} application.`}
    </PageView>
  );
};

export default DashboardPage;
