import React from 'react';

import { ContentPane, HeaderPane, SidebarPane } from './components';
import styles from './styles.module.scss';

const MainView: React.FC = () => (
  <div className={styles.layout}>
    <div className={styles.sidebar}>
      <SidebarPane />
    </div>
    <div className={styles.content}>
      <HeaderPane />
      <ContentPane />
    </div>
  </div>
);

export default MainView;
