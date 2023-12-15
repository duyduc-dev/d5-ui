import React, { forwardRef } from 'react';
import clsx from 'clsx';

import styles from './input.module.scss';

const Input = forwardRef((props, ref) => {
  const { containerClassName, className, iconLeft, iconRight, ...restProps } = props;

  return (
    <div className={clsx(styles.container, containerClassName)}>
      {iconLeft}
      <input
        type="text"
        ref={ref}
        spellCheck={false}
        autoComplete="off"
        className={clsx(styles.input, className)}
        {...restProps}
      />
      {iconRight}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
