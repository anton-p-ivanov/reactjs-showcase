import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import config from 'config';

import styles from './styles.scss';

const AppView: React.FC = () => (
  <BrowserRouter basename="/">
    <div className={styles.app}>
      Welcome to React.JS Application
      <br />
      {config.copyright}
    </div>
  </BrowserRouter>
);

export default AppView;
