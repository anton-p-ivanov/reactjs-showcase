import React from 'react';

import styles from './styles.module.scss';

import type { TTextProps } from './types';

const Text = React.forwardRef<HTMLInputElement, TTextProps>(({ field }, ref) => {
  const {
    onChange, name, value, attrs, type = 'text', isDisabled = false,
  } = field;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => (
    onChange && onChange(event.target.value)
  );

  return (
    <input
      type={type}
      name={name}
      value={value as string}
      onChange={onChangeHandler}
      className={styles.input}
      disabled={isDisabled}
      placeholder={attrs?.placeholder}
      ref={ref}
    />
  );
});

Text.displayName = 'Text';

export default Text;
