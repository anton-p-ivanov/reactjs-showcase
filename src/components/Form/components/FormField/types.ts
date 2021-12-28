/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export type TFormFieldValue = unknown;

export type TFormFieldType =
  // | 'checkbox'
  // | 'choices'
  // | 'date'
  // | 'datetime'
  // | 'file'
  // | 'number'
  | 'password'
  // | 'select'
  // | 'slug'
  | 'text';

export interface TFormField<T extends TFormFieldValue> {
  name: string;
  label?: string;
  hint?: string;
  type?: TFormFieldType;
  isRequired?: boolean;
  isDisabled?: boolean;
  value?: T;
  defaultValue?: T;
  emptyValue?: T;
  errors?: string[];
  onChange?: (value: T) => void;
  ref?: React.RefObject<HTMLInputElement>;
  attrs?: Record<string, unknown>;
}

export type TFormFields = {
  [key: string]: TFormField<any>;
};

export type TFormFieldProps = {
  field: TFormField<any>;
  variant?: 'horizontal' | 'default';
};
