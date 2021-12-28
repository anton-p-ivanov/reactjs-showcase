import React from 'react';

import styles from './styles.module.scss';

import type { TButtonProps } from './types';

const Button: React.FC<TButtonProps> = (props) => {
  const {
    name,
    size,
    isSubmit = false,
    isDisabled = false,
    variant = 'default',
    onClick,
    children,
  } = props;

  const className = [
    styles.initial,
    isDisabled && styles.disabled,
    size && styles[size],
    variant && styles[variant],
  ].filter((c) => c).join(' ');

  return (
    <button
      name={name}
      type={isSubmit ? 'submit' : 'button'}
      className={className}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
