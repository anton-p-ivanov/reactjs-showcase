import React from 'react';

import { v4 } from 'uuid';

import styles from './styles.scss';

import type { TDataTableLoadingProps } from './types';

const DataTableLoading: React.FC<TDataTableLoadingProps> = ({ span, rows = 20 }) => {
  const cells = Array.from({ length: span }, () => (
    <td className={styles.loading} key={v4()}><span>&nbsp;</span></td>
  ));

  return (
    <>
      {Array.from({ length: rows }, () => (
        <tr key={v4()}>{cells}</tr>
      ))}
    </>
  );
};

export default DataTableLoading;
