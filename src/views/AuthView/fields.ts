import type { TFormField, TFormFields } from 'components/Form/types';

const username: TFormField<string> = {
  name: 'username',
  label: 'E-Mail',
  isRequired: true,
  attrs: {
    placeholder: 'Enter your E-Mail',
  },
};

const password: TFormField<string> = {
  name: 'password',
  label: 'Password',
  isRequired: true,
  type: 'password',
  attrs: {
    placeholder: 'Enter valid password',
  },
};

const fields: TFormFields = {
  username,
  password,
};

export default fields;
