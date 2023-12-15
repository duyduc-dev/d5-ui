import React from 'react';

import styles from './base.module.scss';

const BaseLayout = (props) => {
  const { children } = props;

  return <div className={styles.baseLayoutContainer}>{children}</div>;
};

export default BaseLayout;
