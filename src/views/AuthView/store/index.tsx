/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useMemo, useReducer } from 'react';

import actions from './actions';
import Context from './context';
import defaults from './defaults';
import reducer from './reducer';

import type { TReducerContext, TReducerState } from './types';

function withStore<T>(Component: React.ComponentType<T>): React.FC<T> {
  const AuthViewStore: React.FC<T> = (props) => {
    const [state, dispatch] = useReducer(reducer, defaults.state);

    const update = (payload: TReducerState) => {
      dispatch({ type: actions.AUTH_STATE_UPDATE, payload });
    };

    const reset = () => {
      dispatch({ type: actions.AUTH_STATE_RESET });
    };

    const store = useMemo(() => ({ state, update, reset }), [state]);

    return (
      <Context.Provider value={store}>
        <Component {...props} />
      </Context.Provider>
    );
  };

  AuthViewStore.displayName = 'AuthViewStore';

  return AuthViewStore;
}

export const useStore = (): TReducerContext => useContext<TReducerContext>(Context);

export default withStore;
