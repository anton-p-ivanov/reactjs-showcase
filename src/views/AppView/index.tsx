import React, { useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AuthView from 'views/AuthView';
import MainView from 'views/MainView';

import Context from './context';
import useToken from './hooks/useToken';

const AppView: React.FC = () => {
  const { token, setToken } = useToken();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const store = useMemo(() => ({ token, setToken }), [token]);

  return (
    <BrowserRouter>
      <Context.Provider value={store}>
        {token ? <MainView /> : <AuthView />}
      </Context.Provider>
    </BrowserRouter>
  );
};

export default AppView;
