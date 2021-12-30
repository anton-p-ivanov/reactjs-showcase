import React from 'react';

import styles from './styles.module.scss';

const Nav: React.FC = ({ children }) => (
  <nav className={styles.default}>
    {children}
  </nav>
);

export default Nav;
