import React from 'react';

import NavLink from '../NavLink';
import styles from './styles.module.scss';

import type { TNavItemProps } from './types';

const NavItem = React.forwardRef<HTMLDivElement, TNavItemProps>((props, ref) => {
  const {
    item, variant, onClick, children,
  } = props;

  const className = [
    styles.default,
    variant && styles[variant],
  ].filter((c) => c).join(' ');

  const onKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className={className} ref={ref} onClick={onClick} onKeyPress={onKeyPress} role="button" tabIndex={0}>
      <NavLink item={item} />
      {children}
    </div>
  );
});

NavItem.displayName = 'NavItem';

export default NavItem;
