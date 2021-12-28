import React from 'react';

import type { TAppViewContext } from './types';

export default React.createContext<TAppViewContext>({
  token: null,
  setToken: () => null,
});
