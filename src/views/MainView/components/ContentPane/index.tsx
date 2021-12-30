import React from 'react';
import * as Router from 'react-router-dom';

import routes from 'config/routes';

import styles from './styles.module.scss';

const ContentPane: React.FC = () => (
  <div className={styles.default}>
    <React.Suspense fallback="Loading ...">
      <Router.Routes>
        {routes.map((route) => (
          <Router.Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Router.Routes>
    </React.Suspense>
  </div>
);

export default ContentPane;
