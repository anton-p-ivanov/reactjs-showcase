import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from 'components/Form';

import fields from './fields';
import styles from './styles.module.scss';

import type { TListViewSortProps } from './types';
import type { TFormField } from 'components/Form/types';
import type { TAppDispatch, TAppState } from 'store';

const ListViewSort: React.FC<TListViewSortProps> = ({ columns }) => {
  const state = useSelector((root: TAppState) => root.listView);
  const dispatch = useDispatch<TAppDispatch>();

  Object.keys(fields).forEach((key) => {
    const field = fields[key] as TFormField<string>;
    const extend = {
      value: state.sort ? state.sort[key] : '',
      onChange: (v: string) => {
        dispatch({ type: 'listView/applySorting', payload: { ...state.sort, [key]: v } });
      },
    };

    fields[key] = { ...field, ...extend };
  });

  fields.sortBy.attrs = {
    options: columns
      .filter((column) => column.title)
      .map((column) => ({ value: column.name, label: column.title })),
  };

  return (
    <div className={styles.wrapper}>
      <Form.Field field={fields.sortBy} />
      <Form.Field field={fields.sortOrder} />
    </div>
  );
};

export default ListViewSort;
