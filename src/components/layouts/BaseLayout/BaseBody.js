import React from 'react';
import clsx from 'clsx';

import styles from './base.module.scss';

const BaseBody = (props) => {
  const { disablePaddingHeader, children } = props;

  return (
    <div className={clsx(styles.baseBodyContainer, disablePaddingHeader && styles.disablePaddingHeader)}>
      {children}
    </div>
  );
};

export default BaseBody;
