import React, { useContext } from 'react';

import Context from 'views/AppView/context';

import { useStore } from '../store';

type TUseHandlers = () => {
  submit: (event: React.FormEvent<HTMLFormElement>) => void,
};

const useHandlers: TUseHandlers = () => {
  const { state, submit } = useStore();
  const { setToken } = useContext(Context);

  return ({
    submit: (event) => {
      event.preventDefault();

      submit(state.data).then((response) => setToken(response.token), undefined);
    },
  });
};

export default useHandlers;
