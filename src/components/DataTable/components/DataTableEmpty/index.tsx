import React from 'react';

import styles from './styles.scss';

import type { TDataTableEmptyProps } from './types';

const DataTableEmpty: React.FC<TDataTableEmptyProps> = ({ span, children }) => (
  <tr>
    <td colSpan={span} className={styles.cell}>
      <div className={styles.wrapper}>{children || 'No elements found'}</div>
    </td>
  </tr>
);

export default DataTableEmpty;
