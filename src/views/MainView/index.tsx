import React from 'react';

import { ContentPane, SidebarPane } from './components';
import styles from './styles.module.scss';

const MainView: React.FC = () => (
  <div className={styles.layout}>
    <div className={styles.sidebar}>
      <SidebarPane />
    </div>
    <div className={styles.content}>
      <ContentPane />
    </div>
  </div>
);

export default MainView;
