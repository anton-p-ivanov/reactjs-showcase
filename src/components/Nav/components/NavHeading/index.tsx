import React from 'react';

import styles from './styles.module.scss';

const NavHeading: React.FC = ({ children }) => (
  <div className={styles.default}>
    {children}
  </div>
);

export default NavHeading;
