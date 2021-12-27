import React from 'react';

import config from 'config';

import styles from './styles.module.scss';

const AuthView: React.FC = () => (
  <div className={styles.view}>
    <div className={styles.form}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={config.logo} alt={config.title} width="50" />
        </div>
        <div className={styles.title}>
          {config.title}
          <div className={styles.author}>
            {`by ${config.author}`}
          </div>
        </div>
      </div>
    </div>
    <div className={styles.copyright}>
      {config.copyright}
    </div>
  </div>
);

export default AuthView;
