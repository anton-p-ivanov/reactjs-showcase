import React from 'react';

import config from 'config';

import styles from './styles.module.scss';

const AuthView: React.FC = () => (
  <div className={styles.view}>
    <div className={styles.form}>
      Welcome to React.JS Application
      <br />
    </div>
    <div className={styles.copyright}>
      {config.copyright}
    </div>
  </div>

);

export default AuthView;
