import React from 'react';

import styles from './styles.module.scss';

import type { TAlertProps } from './types';

const Alert: React.FC<TAlertProps> = ({ children, ...props }) => {
  const { variant = 'info' } = props;

  const headers = {
    info: 'Do you know?',
    warning: 'Something went wrong',
    danger: 'An error occurred',
    success: 'Everything goes as planed!',
  };

  return (
    <div className={styles[variant]}>
      <div className={styles.content}>
        <div className={styles.header}>{headers[variant]}</div>
        <div className={styles.message}>{children}</div>
      </div>
    </div>
  );
};

export default Alert;
