import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import config from 'config';

import './styles.scss';

const AppView: React.FC = () => (
  <BrowserRouter basename="/">
    <div style={{ textAlign: 'center' }}>
      Welcome to React.JS Application
      <br />
      {config.copyright}
    </div>
  </BrowserRouter>
);

export default AppView;
