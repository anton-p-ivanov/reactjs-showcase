import React from 'react';

import defaults from './defaults';

import type { TReducerContext } from './types';

export default React.createContext<TReducerContext>({
  state: defaults.state,
  update: () => null,
  reset: () => null,
  submit: () => new Promise(() => {}),
});
