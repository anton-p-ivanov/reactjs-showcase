import type { TReducerState } from './types';

const state: TReducerState = {
  data: {
    username: '',
    password: '',
  },
  token: null,
  status: 'WAITING',
};

export default { state };
