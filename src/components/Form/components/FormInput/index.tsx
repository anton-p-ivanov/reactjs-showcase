import React from 'react';

import Inputs from './components';
import styles from './styles.module.scss';

import type { TFormInputProps } from './types';

const FormInput: React.FC<TFormInputProps> = (props) => {
  const { field, variant = 'default' } = props;

  const Component = Inputs[field.type || 'text'] || Inputs.text;

  return (
    <div className={styles[variant]}>
      {Component && <Component field={field} ref={field.ref} />}
    </div>
  );
};

export default FormInput;
