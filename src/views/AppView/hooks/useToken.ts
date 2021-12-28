import { useEffect, useState } from 'react';

import jwt_decode, { JwtPayload } from 'jwt-decode';

import type { TAuthToken } from 'config/types';

type TUseToken = {
  token: TAuthToken,
  setToken: (token: TAuthToken) => void,
};

const useToken = (): TUseToken => {
  const [token, setToken] = useState<TAuthToken>(
    localStorage.getItem('token'),
  );

  if (token) {
    const decodedToken = jwt_decode<JwtPayload>(token);
    if (decodedToken.exp && decodedToken.exp < Math.floor(new Date().getTime() / 1000)) {
      localStorage.removeItem('token');
      setToken(null);
    }
  }

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    }
  }, [token]);

  return { token, setToken };
};

export default useToken;
