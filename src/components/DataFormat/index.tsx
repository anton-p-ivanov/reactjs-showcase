import React from 'react';

import fileSize from 'filesize';

import type { TDataFormatProps } from './types';

const DataFormat: React.FC<TDataFormatProps> = (props) => {
  const { format, value } = props;

  switch (format) {
    case 'date':
    case 'datetime':
      return (
        <>
          {new Intl.DateTimeFormat('ru', {
            dateStyle: 'medium',
            timeStyle: format === 'date' ? undefined : 'short',
          }).format(new Date(value))}
        </>
      );
    case 'filesize':
      return <>{fileSize(+value)}</>;
    default:
      // eslint-disable-next-line react/jsx-no-useless-fragment
      return <>{ value }</>;
  }
};

export default DataFormat;
