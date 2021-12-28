import React from 'react';

import FormError from '../FormError';
import FormHint from '../FormHint';
import FormInput from '../FormInput';
import FormLabel from '../FormLabel';
import styles from './styles.module.scss';

import type { TFormFieldProps } from './types';

const FormField: React.FC<TFormFieldProps> = ({ children, ...props }) => {
  const { field, variant = 'default' } = props;

  const className = [
    styles[variant],
    field.type && styles[field.type],
    field.errors && styles.invalid,
  ].filter((c) => c).join(' ');

  return (
    <div className={className}>
      {field.label && (
        <FormLabel name={field.name} isRequired={field.isRequired} variant={variant}>
          {field.label}
        </FormLabel>
      )}
      {children || <FormInput field={field} variant={variant} />}
      {field.hint && <FormHint>{field.hint}</FormHint>}
      {field.errors && <FormError>{field.errors.join('<br>')}</FormError>}
    </div>
  );
};

export default FormField;
