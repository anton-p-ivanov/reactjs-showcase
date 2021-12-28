import React from 'react';

import styles from './styles.module.scss';

import type { TFormActionsProps } from './types';

const FormActions: React.FC<TFormActionsProps> = ({ children, ...props }) => {
  const { variant = 'default' } = props;

  return (
    <div className={styles[variant]}>
      {children}
    </div>
  );
};

export default FormActions;
