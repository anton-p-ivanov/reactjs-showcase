import React from 'react';

import styles from './styles.module.scss';

const FormError: React.FC = ({ children }) => (
  <div className={styles.default}>{children}</div>
);

export default FormError;
