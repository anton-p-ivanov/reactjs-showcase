import React from 'react';

import { DataToolbarGroup, DataToolbarItem } from './components';
import styles from './styles.module.scss';

import type { TDataToolbar } from './types';

const DataToolbar: TDataToolbar = (props) => {
  const { component: Toolbar, children } = props;

  return (
    <div className={styles.wrapper}>
      {Toolbar ? <Toolbar /> : children}
    </div>
  );
};

DataToolbar.Group = DataToolbarGroup;
DataToolbar.Item = DataToolbarItem;

export default DataToolbar;
