import React from 'react';

import styles from './styles.module.scss';

import type { TFormLabelProps } from './types';

const FormLabel: React.FC<TFormLabelProps> = ({ children, ...props }) => {
  const { name, variant = 'default', isRequired = false } = props;

  const className = [
    styles[variant],
    isRequired && styles.required,
  ].filter((c) => c).join(' ');

  return (
    <label className={className} htmlFor={name}>
      {children}
    </label>
  );
};

export default FormLabel;
