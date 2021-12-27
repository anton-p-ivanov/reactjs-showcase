import React from 'react';
import ReactDOM from 'react-dom';

import AppView from 'views/AppView';

import 'assets/styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <AppView />
  </React.StrictMode>,
  document.getElementById('root'),
);
