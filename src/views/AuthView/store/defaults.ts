import type { TReducerState } from './types';

const state: TReducerState = {
  data: {
    username: '',
    password: '',
  },
  status: 'WAITING',
};

export default { state };
