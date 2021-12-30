import React from 'react';

import { v4 } from 'uuid';

import { Logo, Nav } from 'components';
import NavItem from 'components/Nav/components/NavItem';
import NavSection from 'components/Nav/components/NavSection';
import items from 'config/navigation';

import styles from './styles.module.scss';

const SidebarPane: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.brand}>
      <Logo />
    </div>
    <div className={styles.nav}>
      <Nav>
        {items.map((item) => (
          item.items
            ? <NavSection title={item.title} items={item.items} key={v4()} />
            : <NavItem item={item} key={v4()} />
        ))}
      </Nav>
    </div>
  </div>
);

export default SidebarPane;
