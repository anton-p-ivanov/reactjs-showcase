import actions from './actions';
import defaults from './defaults';

import type { TReducer } from './types';

const Reducer: TReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.AUTH_STATE_RESET:
      return { ...state, ...defaults.state };

    case actions.AUTH_STATE_UPDATE:
      return { ...state, ...payload };

    case actions.AUTH_REQUEST_SENT:
      return { ...state, status: 'AUTH_REQUEST_SENT', ...payload };

    case actions.AUTH_REQUEST_SUCCEED:
      return { ...state, status: 'AUTH_REQUEST_SUCCEED', ...payload };

    case actions.AUTH_REQUEST_FAILED:
      return { ...state, status: 'AUTH_REQUEST_FAILED', ...payload };

    default:
      return state;
  }
};

export default Reducer;
