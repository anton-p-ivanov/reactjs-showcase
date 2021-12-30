import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import { Icon } from 'components';

import styles from './styles.module.scss';

import type { TNavLinkProps } from './types';

const NavLink: React.FC<TNavLinkProps> = ({ item }) => {
  const linkClassName = (props: { isActive: boolean }) => (
    [styles.link, props.isActive && styles.active].filter((c) => c).join(' ')
  );

  return (
    <div className={styles.wrapper}>
      {item.icon && (
        <div className={styles.icon}>
          <Icon name={item.icon} size="small" />
        </div>
      )}
      {item.route ? (
        <Link to={item.route} className={linkClassName}>
          {item.title}
        </Link>
      ) : (
        <div className={styles.title}>{item.title}</div>
      )}
    </div>
  );
};

export default NavLink;
