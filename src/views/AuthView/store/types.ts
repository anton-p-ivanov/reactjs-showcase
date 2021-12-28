import { Reducer } from 'react';

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
};

export type TReducerAction = {
  type: number;
  payload?: TReducerState;
};

export type TReducerContext = {
  state: TReducerState,
  update: (payload: TReducerState) => void,
  reset: () => void,
};

export type TReducer = Reducer<TReducerState, TReducerAction>;
