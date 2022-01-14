import React from 'react';

import ListView from 'views/ListView';

const NewsList: React.FC = () => (
  <ListView endpoint="/content/news" />
);

export default NewsList;
