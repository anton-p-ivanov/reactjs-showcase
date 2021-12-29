import React from 'react';

import { Alert, Button, Form } from 'components';

import useFields from '../../hooks/useFields';
import useHandlers from '../../hooks/useHandlers';
import { useStore } from '../../store';
import styles from './styles.module.scss';

const AuthForm: React.FC = () => {
  const { state } = useStore();
  const fields = useFields();
  const handlers = useHandlers();

  return (
    <div className={styles.wrapper}>
      {state.status === 'AUTH_REQUEST_FAILED' && <Alert variant="danger">No user with provided credentials found</Alert>}
      <Form onSubmit={handlers.submit}>
        {Object.entries(fields).map(([key, field]) => (
          <Form.Field field={field} variant="horizontal" key={key} />
        ))}
        <div className={styles.actions}>
          <Button isSubmit isDisabled={state.status === 'AUTH_REQUEST_SENT'} variant="primary">
            Sign in
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AuthForm;
