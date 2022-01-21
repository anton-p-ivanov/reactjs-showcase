import React from 'react';

import { DropDown, Icon } from 'components';

import Context from './context';

import type { TListViewContextProps } from './types';

const ListViewContext: React.FC<TListViewContextProps> = (props) => {
  const { baseUrl, children } = props;
  const toggleDropdown = <Icon name="more-vertical" title="Choose action" />;

  return (
    <DropDown toggle={toggleDropdown}>
      <Context.Consumer>
        {children || ((context) => (
          <>
            <DropDown.Link icon="edit" route={`${baseUrl}/uuid/edit`}>Edit</DropDown.Link>
            <DropDown.Link icon="copy" route={`${baseUrl}/uuid/copy`}>Copy</DropDown.Link>
            <DropDown.Divider />
            <DropDown.Button icon="trash-2" onClick={context.remove}>Remove</DropDown.Button>
          </>
        ))}
      </Context.Consumer>
    </DropDown>
  );
};

export default ListViewContext;
