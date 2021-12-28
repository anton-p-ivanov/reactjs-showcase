import React from 'react';

import type { TFormActionsProps } from './components/FormActions/types';
import type { TFormFieldProps } from './components/FormField/types';

type TFormProps = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export type TForm = React.FC<TFormProps> & {
  Actions: React.FC<TFormActionsProps>;
  Field: React.FC<TFormFieldProps>;
};

export type { TFormField, TFormFields } from './components/FormField/types';
