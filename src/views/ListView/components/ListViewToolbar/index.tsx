import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, DataToolbar, Icon } from 'components';
import { TAppDispatch } from 'store';

import type { TListViewToolbarProps } from './types';

const ListViewToolbar: React.FC<TListViewToolbarProps> = ({ children, ...props }) => {
  const { createUrl, createLabel = 'Add', withFilter = true } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch<TAppDispatch>();

  const toggleFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const refreshHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({ type: 'listView/refresh' });
  };

  const createHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    return createUrl && navigate(createUrl);
  };

  return (
    <DataToolbar>
      <DataToolbar.Group>
        {createUrl && (
          <DataToolbar.Item>
            <Button onClick={createHandler} variant="success">
              {createLabel}
            </Button>
          </DataToolbar.Item>
        )}
        <DataToolbar.Item>
          <Button onClick={refreshHandler}>
            <Icon name="refresh-cw" title="Refresh" />
          </Button>
        </DataToolbar.Item>
      </DataToolbar.Group>
      <DataToolbar.Group>
        <DataToolbar.Item>
          {children}
        </DataToolbar.Item>
        {withFilter && (
          <DataToolbar.Item>
            <Button onClick={toggleFilter}>
              <Icon name="filter" title="Filter settings" />
            </Button>
          </DataToolbar.Item>
        )}
      </DataToolbar.Group>
    </DataToolbar>
  );
};

export default ListViewToolbar;
