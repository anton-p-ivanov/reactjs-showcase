import React from 'react';

import styles from './styles.scss';

import type { TDataTableHeaderProps } from './types';

const DataTableHeader: React.FC<TDataTableHeaderProps> = ({ column }) => {
  const { name, title } = column;

  return (
    <th className={`data-header-${name} ${styles.default}`}>
      {title}
    </th>
  );
};

export default DataTableHeader;
