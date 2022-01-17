import React from 'react';

import * as Components from './components';
import styles from './styles.scss';

import type { TDataTable } from './types';

const DataTable: TDataTable = (props) => {
  const { columns, children } = props;

  return (
    <table className={styles.table}>
      {columns && (
        <>
          <colgroup>
            {columns.map((column) => (
              <col
                key={`data-column-${column.name}`}
                className={`data-column-${column.name}`}
              />
            ))}
          </colgroup>
          <thead>
            <tr>
              {columns.map((column) => (
                <Components.DataTableHeader column={column} key={`data-header-${column.name}`} />
              ))}
            </tr>
          </thead>
        </>
      )}
      <tbody>{children}</tbody>
    </table>
  );
};

DataTable.Empty = Components.DataTableEmpty;
DataTable.Error = Components.DataTableError;
DataTable.Row = Components.DataTableRow;
DataTable.Loading = Components.DataTableLoading;

export default DataTable;
