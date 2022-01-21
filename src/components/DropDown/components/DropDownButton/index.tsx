import React from 'react';

import Icon from 'components/Icon';

import styles from './styles.module.scss';

import type { TDropDownButtonProps } from './types';

const DropDownButton: React.FC<TDropDownButtonProps> = (props) => {
  const { icon, onClick, children } = props;

  return (
    <button type="button" className={styles.wrapper} onClick={onClick}>
      <div className={styles.icon}>
        <Icon name={icon} />
      </div>
      <div className={styles.label}>{children}</div>
    </button>
  );
};

export default DropDownButton;
