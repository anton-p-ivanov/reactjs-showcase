import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { v4 } from 'uuid';

import { DataTable } from 'components/index';

import { ListViewPagination } from './components';
import { fetchData } from './store/slice';
import styles from './styles.module.scss';

import type { TListViewProps, TListViewRow } from './types';
import type { TAppState, TAppDispatch } from 'store';

const ListView: React.FC<TListViewProps> = (props) => {
  const { columns, endpoint, templates } = props;

  const state = useSelector((root: TAppState) => root.listView);
  const dispatch = useDispatch<TAppDispatch>();

  const { pagination } = state;

  const params = {
    endpoint,
    page: pagination.page,
    size: pagination.size,
    sort: state.sort,
  };

  const deps = JSON.stringify(params);

  useEffect(() => {
    dispatch<void>(fetchData(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, deps]);

  const Row: React.FC<TListViewRow> = templates.row;

  return (
    <div className={styles.table}>
      <DataTable columns={columns}>
        {state.status === 'FETCH_PENDING' && <DataTable.Loading span={columns.length} rows={pagination.size} /> }
        {state.status === 'FETCH_FAILED' && <DataTable.Error span={columns.length} />}
        {state.status === 'FETCH_SUCCEED' && (
          <>
            {state.data.length === 0 && <DataTable.Empty span={columns.length} />}
            {state.data.map((item) => (
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              <DataTable.Row key={v4()} template={<Row data={item} />} />
            ))}
          </>
        )}
      </DataTable>
      <ListViewPagination />
    </div>
  );
};

export default ListView;
