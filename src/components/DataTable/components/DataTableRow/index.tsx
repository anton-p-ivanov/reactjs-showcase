import React from 'react';

import type { TDataTableRowProps } from './types';

const DataTableRow: React.FC<TDataTableRowProps> = (props) => {
  const { template } = props;

  return (
    <tr>
      {template}
    </tr>
  );
};

export default DataTableRow;
