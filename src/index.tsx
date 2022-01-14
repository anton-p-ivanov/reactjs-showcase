import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppView from 'views/AppView';

import store from './store';
import 'assets/styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppView />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
