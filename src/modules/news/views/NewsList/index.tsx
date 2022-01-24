import React from 'react';

import ListView from 'views/ListView';

import settings from './settings';

const NewsList: React.FC = () => (
  <ListView settings={settings} />
);

export default NewsList;
