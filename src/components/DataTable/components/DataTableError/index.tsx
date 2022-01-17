import React from 'react';

import styles from './styles.scss';

import type { TDataTableErrorProps } from './types';

const DataTableError: React.FC<TDataTableErrorProps> = ({ span, children }) => (
  <tr>
    <td colSpan={span}>
      <div className={styles.wrapper}>
        {children || 'Could not load data'}
      </div>
    </td>
  </tr>
);

export default DataTableError;
