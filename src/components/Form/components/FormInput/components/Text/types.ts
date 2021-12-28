import type { TFormField } from '../../../FormField/types';

export type TTextField = TFormField<string> & {
  attrs?: {
    placeholder?: string
  }
};

export type TTextProps = {
  field: TTextField;
};
