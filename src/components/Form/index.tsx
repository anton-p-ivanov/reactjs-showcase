import React from 'react';

import { FormActions, FormField } from './components';
import styles from './styles.module.scss';

import type { TForm } from './types';

const Form: TForm = ({ children, ...props }) => {
  const { onSubmit } = props;

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

Form.Actions = FormActions;
Form.Field = FormField;

export default Form;
