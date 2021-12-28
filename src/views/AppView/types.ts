import type { TAuthToken } from 'config/types';

export type TAppViewContext = {
  token: TAuthToken;
  setToken: (token: TAuthToken) => void;
};
