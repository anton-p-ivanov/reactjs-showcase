import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AuthView from 'views/AuthView';

const AppView: React.FC = () => (
  <BrowserRouter basename="/">
    <AuthView />
  </BrowserRouter>
);

export default AppView;
