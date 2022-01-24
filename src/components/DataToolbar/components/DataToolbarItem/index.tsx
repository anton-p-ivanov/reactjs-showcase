import React from 'react';

import styles from '../../styles.module.scss';

const DataToolbarItem: React.FC = ({ children }) => (
  <div className={styles.item}>
    {children}
  </div>
);

export default DataToolbarItem;
