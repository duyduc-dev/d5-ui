import React from 'react';
import { useLayoutStore } from '@store';
import clsx from 'clsx';

import styles from './base.module.scss';

const BaseContent = (props) => {
  const { children, fullScreen = false } = props;

  const { isLeftBarOpen } = useLayoutStore();

  return (
    <div
      className={clsx(styles.baseContentContainer, {
        [styles.fullScreen]: fullScreen || !isLeftBarOpen,
      })}
    >
      {children}
    </div>
  );
};

export default BaseContent;
