import React from 'react';

import { DataFormat, Icon } from 'components';

import NewsListContext from '../NewsListContext';
import styles from './styles.module.scss';

import type { TNewsListRowProps } from './types';

const NewsListRow: React.FC<TNewsListRowProps> = ({ data }) => (
  <>
    <td className={styles.title}>
      {data.title}
    </td>
    <td className={styles.publishedAt}>
      <DataFormat format="date" value={data.publishedAt} />
    </td>
    <td className={styles.locale}>
      {data.locale.toUpperCase()}
    </td>
    <td className={styles.isPublished}>
      {data.isPublished && <Icon name="check" variant="success" />}
      {!data.isPublished && <Icon name="x" variant="muted" />}
    </td>
    <td className={styles.updatedAt}>
      {data.workflow
        ? <DataFormat format="datetime" value={data.workflow.updatedAt} />
        : <em>Нет данных</em>}
    </td>
    <td className={styles.context}>
      <NewsListContext data={data} />
    </td>
  </>
);

export default NewsListRow;
