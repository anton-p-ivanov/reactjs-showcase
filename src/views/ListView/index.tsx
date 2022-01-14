import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from './store/slice';

import type { TListViewProps } from './types';
import type { TAppState, TAppDispatch } from 'store';

const ListView: React.FC<TListViewProps> = (props) => {
  const { endpoint } = props;

  const state = useSelector((root: TAppState) => root.listView);
  const dispatch = useDispatch<TAppDispatch>();

  useEffect(() => { dispatch<void>(fetchData(endpoint)); }, [dispatch, endpoint]);

  return (
    <div>
      {JSON.stringify(state.data)}
    </div>
  );
};

export default ListView;
