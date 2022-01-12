import React from 'react';

import styles from './styles.module.scss';

import type { TPageViewProps } from './types';

const PageView: React.FC<TPageViewProps> = (props) => {
  const { title, children } = props;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        {title}
      </div>
      <div className={styles.body}>
        {children}
      </div>
    </div>
  );
};

export default PageView;
