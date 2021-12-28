import React from 'react';

import styles from './styles.module.scss';

const FormHint: React.FC = ({ children }) => (
  <div className={styles.default}>{children}</div>
);

export default FormHint;
