import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { v4 } from 'uuid';

import { Icon } from 'components';
import animate from 'lib/animate';

import NavItem from '../NavItem';
import styles from './styles.module.scss';

import type { TNavGroupProps } from './types';

const NavGroup: React.FC<TNavGroupProps> = ({ item }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);
  const { pathname } = useLocation();

  const getMaxHeight = () => (
    ref.current ? (ref.current.clientHeight * (item.items || []).length) : 0
  );

  const toggleGroup = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const isCollapsed = height === 0;

    animate({
      timing: isCollapsed ? 'easeIn' : 'easeOut',
      draw: (progress: number) => setHeight(getMaxHeight() * progress),
    });
  };

  useEffect(() => {
    const items = item.items || [];
    const isCollapsed = typeof (items.find((i) => i.route && pathname.startsWith(i.route))) === 'undefined';
    setHeight(isCollapsed ? 0 : getMaxHeight());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.group}>
      <NavItem item={item} variant="group-toggle" onClick={toggleGroup} ref={ref}>
        <Icon name="chevron-down" size="small" variant={!height ? 'collapsed' : 'expanded'} />
      </NavItem>
      <nav className={styles.nav} style={{ height }} aria-hidden={!height}>
        {item.items && item.items.map((groupItem) => (
          <NavItem item={groupItem} key={v4()} />
        ))}
      </nav>
    </div>
  );
};

export default NavGroup;
