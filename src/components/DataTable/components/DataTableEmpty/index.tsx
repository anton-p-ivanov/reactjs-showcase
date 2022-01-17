import React from 'react';

import styles from './styles.scss';

import type { TDataTableEmptyProps } from './types';

const DataTableEmpty: React.FC<TDataTableEmptyProps> = ({ span }) => (
  <tr>
    <td colSpan={span}>
      <div className={styles.wrapper}>
        <div className={styles.message}>Элементы не найдены</div>
      </div>
    </td>
  </tr>
);

export default DataTableEmpty;
