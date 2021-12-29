/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useMemo, useReducer } from 'react';

import API from 'lib/api';

import actions from './actions';
import Context from './context';
import defaults from './defaults';
import reducer from './reducer';

import type * as Types from './types';
import type { AxiosRequestConfig } from 'axios';
import type { TAuthToken } from 'config/types';

/**
 * AuthView component store provider.
 * @param Component
 */
function withStore<T>(Component: React.ComponentType<T>): React.FC<T> {
  const AuthViewStore: React.FC<T> = (props) => {
    const [state, dispatch] = useReducer(reducer, defaults.state);

    const update = (payload: Types.TReducerState) => {
      dispatch({ type: actions.AUTH_STATE_UPDATE, payload });
    };

    const reset = () => {
      dispatch({ type: actions.AUTH_STATE_RESET });
    };

    const submit = async (data: Types.TReducerData): Promise<TAuthToken> => {
      dispatch({ type: actions.AUTH_REQUEST_SENT });

      try {
        const config: AxiosRequestConfig = { method: 'POST', url: '/auth', data };
        const response = await API.request<Types.TAuthResponse>(config);
        dispatch({ type: actions.AUTH_REQUEST_SUCCEED });

        return response.data.token;
      } catch (e) {
        dispatch({ type: actions.AUTH_REQUEST_FAILED });

        return null;
      }
    };

    const store = useMemo(() => ({
      state, update, reset, submit,
    }), [state]);

    return (
      <Context.Provider value={store}>
        <Component {...props} />
      </Context.Provider>
    );
  };

  AuthViewStore.displayName = 'AuthViewStore';

  return AuthViewStore;
}

export const useStore = (): Types.TReducerContext => useContext<Types.TReducerContext>(Context);

export default withStore;
