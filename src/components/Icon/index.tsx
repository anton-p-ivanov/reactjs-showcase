import React from 'react';

import sprites from 'feather-icons/dist/feather-sprite.svg';

import styles from './styles.module.scss';

import type { TIconProps } from './types';

const Icon: React.FC<TIconProps> = (props) => {
  const {
    name, size, title, variant,
  } = props;

  const className = [
    styles.feather,
    size && styles[size],
    variant && styles[variant],
  ].filter((c) => c).join(' ');

  return (
    <svg className={className}>
      {title ? <title>{title}</title> : null}
      <use href={`${sprites}#${name}`} />
    </svg>
  );
};

export default Icon;
