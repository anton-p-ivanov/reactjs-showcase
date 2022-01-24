import React from 'react';

import styles from '../../styles.module.scss';

const DataToolbarGroup: React.FC = ({ children }) => (
  <div className={styles.group}>
    {children}
  </div>
);

export default DataToolbarGroup;
