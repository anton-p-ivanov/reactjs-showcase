import React from 'react';

import config from 'config';

import styles from './styles.module.scss';

const Logo: React.FC = () => (
  <div className={styles.wrapper}>
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
);

export default Logo;
