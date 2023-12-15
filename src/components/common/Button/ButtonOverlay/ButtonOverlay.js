import React, { forwardRef } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';

import styles from './style.module.scss';

const ButtonStyled = styled(Button)`
  font-family: var(--font-family);
  background-color: transparent;
  text-decoration: none;
  color: var(--neutrals-grey-1);
  text-transform: none;
  margin-left: 0;
  padding: var(--spacing-2) var(--spacing-4);
  cursor: pointer;
  text-align: center;
  line-height: var(--spacing-14px);
  font-weight: var(--font-weight-medium);
  font-size: var(--spacing-3);
  transition: all 0.3s linear;

  &:hover {
    background-color: transparent;
  }
`;

const ButtonOverlay = forwardRef((props, ref) => {
  const { children, fullWidth, fullHeight, className, overlayHover, ...restProps } = props;

  return (
    <ButtonStyled
      {...restProps}
      ref={ref}
      className={clsx(className, {
        [styles.fullHeight]: fullHeight,
        [styles.fullWidth]: fullWidth,
        [styles.overlayHover]: overlayHover,
      })}
    >
      {children}
    </ButtonStyled>
  );
});

ButtonOverlay.displayName = 'ButtonOverlay';

export default ButtonOverlay;
