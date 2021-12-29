import { Reducer } from 'react';

import type { TAuthToken } from 'config/types';

export type TReducerData = {
  [key: string]: string;
  username: string;
  password: string;
};

export type TReducerStatus =
  | 'WAITING'
  | 'AUTH_REQUEST_SENT'
  | 'AUTH_REQUEST_SUCCEED'
  | 'AUTH_REQUEST_FAILED';

export type TReducerState = {
  status: TReducerStatus;
  data: TReducerData;
  token: TAuthToken;
};

export type TReducerAction = {
  type: number;
  payload?: TReducerState;
};

export type TReducerContext = {
  state: TReducerState,
  reset: () => void,
  update: (payload: TReducerState) => void,
  submit: (data: TReducerData) => Promise<TAuthToken>,
};

export type TReducer = Reducer<TReducerState, TReducerAction>;

export type TAuthResponse = {
  token: string;
};
