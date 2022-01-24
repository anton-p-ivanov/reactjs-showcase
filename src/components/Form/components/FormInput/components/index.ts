/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import Select from './Select';
import Text from './Text';

import type { TFormFieldType } from '../../FormField/types';

type TInputs = {
  [key in TFormFieldType]: React.ForwardRefExoticComponent<any>;
};

const Inputs: TInputs = {
  password: Text,
  select: Select,
  text: Text,
};

export default Inputs;
