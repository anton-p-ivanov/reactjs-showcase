import React from 'react';

import { Button, Form } from 'components';
import config from 'config';

import useFields from './hooks/useFields';
import withStore, { useStore } from './store';
import styles from './styles.module.scss';

const AuthView: React.FC = () => {
  const { state } = useStore();
  const fields = useFields();

  return (
    <div className={styles.view}>
      <div className={styles.form}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src={config.logo} alt={config.title} width="50" />
          </div>
          <div className={styles.title}>
            {config.title}
            <div className={styles.author}>
              {`by ${config.author}`}
            </div>
          </div>
        </div>
        <Form>
          {Object.entries(fields).map(([key, field]) => (
            <Form.Field field={field} variant="horizontal" key={key} />
          ))}
          <div className={styles.actions}>
            <Button isSubmit isDisabled={state.status === 'AUTH_REQUEST_SENT'} variant="primary">
              Sign in
            </Button>
          </div>
        </Form>
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
};

export default withStore(AuthView);
