import React from 'react';
import { Link } from 'react-router-dom';

import Icon from 'components/Icon';

import styles from './styles.module.scss';
import { TDropDownLinkProps } from './types';

const DropDownLink: React.FC<TDropDownLinkProps> = ({ children, ...props }) => {
  const { route, icon, onClick } = props;

  return (
    <Link to={route} className={styles.wrapper} onClick={onClick}>
      <div className={styles.icon}>
        <Icon name={icon} />
      </div>
      <div className={styles.label}>{children}</div>
    </Link>
  );
};

export default DropDownLink;
