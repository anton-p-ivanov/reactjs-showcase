/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TFormField } from '../FormField/types';

export type TFormInputProps = {
  field: TFormField<any>;
  variant?: 'default' | 'horizontal';
};
