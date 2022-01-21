import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Pagination } from 'components';

import type { TAppState, TAppDispatch } from 'store';

const ListViewPagination: React.FC = () => {
  const state = useSelector((root: TAppState) => root.listView);
  const dispatch = useDispatch<TAppDispatch>();
  const { pagination } = state;

  // Callback used in pagination to navigate through pages
  const navigate = (page: number) => {
    dispatch({ type: 'listView/navigateToPage', payload: page });
  };

  return (
    <Pagination
      resultsTotal={pagination.total}
      resultsPerPage={pagination.size}
      page={pagination.page}
      navigate={navigate}
    />
  );
};

export default ListViewPagination;
