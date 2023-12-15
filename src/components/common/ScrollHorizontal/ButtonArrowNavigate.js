import React from 'react';
import clsx from 'clsx';

import styles from './style.mosule.scss';

const ButtonArrowNavigate = ({ hidden, right, children, className, ...restProps }) => {
  return (
    <button
      className={clsx(styles.buttonNavigate, right && styles.right, hidden && styles.hidden, className)}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default ButtonArrowNavigate;
