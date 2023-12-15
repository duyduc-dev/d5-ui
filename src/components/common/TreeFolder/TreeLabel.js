import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import clsx from 'clsx';

import styles from './style.module.scss';

const TreeLabel = (props) => {
  const { title, icon, open, hiddenIconOpen } = props;

  return (
    <div className={styles.treeLabelContainer}>
      <div className={clsx(styles.inner, open && styles.treeLabelTitleActive)}>
        {icon}
        <div className={clsx(styles.treeLabelTitle, open && styles.treeLabelTitleActive)}>
          <span>{title}</span>
        </div>
      </div>
      {!hiddenIconOpen && (
        <div className={clsx(styles.iconDirection, open && styles.iconOpening)}>
          <AiFillCaretDown />
        </div>
      )}
    </div>
  );
};

export default TreeLabel;
