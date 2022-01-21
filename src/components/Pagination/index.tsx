import React from 'react';

import Button from 'components/Button';
import Icon from 'components/Icon';

import styles from './styles.module.scss';

import type { TPaginationProps } from './types';

const Pagination: React.FC<TPaginationProps> = (props) => {
  const {
    page = 1,
    resultsPerPage = 10,
    resultsTotal,
    navigate,
  } = props;

  const paginator = {
    firstIndex: resultsPerPage * (page - 1) + 1,
    lastIndex: resultsTotal < (resultsPerPage * page) ? resultsTotal : (resultsPerPage * page),
    pagesTotal: Math.ceil(resultsTotal / resultsPerPage),
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.previous}>
        <Button size="small" isDisabled={page === 1} onClick={() => navigate(page - 1)}>
          <Icon name="arrow-left" title="Previous page" />
        </Button>
      </div>
      <div className={styles.next}>
        <Button size="small" isDisabled={page === paginator.pagesTotal} onClick={() => navigate(page + 1)}>
          <Icon name="arrow-right" title="Next page" />
        </Button>
      </div>
      <div className={styles.text}>
        {`Показаны ${paginator.firstIndex} — ${paginator.lastIndex} из ${resultsTotal} элементов`}
      </div>
    </div>
  );
};

export default Pagination;
