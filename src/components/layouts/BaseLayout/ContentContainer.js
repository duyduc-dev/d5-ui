import React from 'react';
import clsx from 'clsx';

import styles from './base.module.scss';

const ContentContainer = ({ children, fullScreen = false }) => {
  return (
    <div className={clsx(styles.contentContainer, { [styles.fullScreen]: fullScreen })}>
      <div className={styles.contentInner}>{children}</div>
    </div>
  );
};

export default ContentContainer;
