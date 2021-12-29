import React from 'react';

import { Logo } from 'components';
import config from 'config';

import AuthForm from './components/AuthForm';
import withStore from './store';
import styles from './styles.module.scss';

const AuthView: React.FC = () => (
  <div className={styles.view}>
    <div className={styles.form}>
      <Logo />
      <AuthForm />
      <div className={styles.comments}>
        Technologies used in this training project:
        <br />
        React.JS, Typescript, SASS, CSS Modules, ESLint
      </div>
    </div>
    <div className={styles.copyright}>
      {config.copyright}
    </div>
  </div>
);

export default withStore(AuthView);
