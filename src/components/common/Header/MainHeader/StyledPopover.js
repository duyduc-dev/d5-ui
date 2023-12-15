import React from 'react';
import Popover, { popoverClasses } from '@mui/material/Popover';
import { styled } from '@mui/material/styles';

const PopoverComp = (props) => {
  const { children, maxHeight, ...restProps } = props;

  return (
    <Popover data-max-height={maxHeight} {...restProps}>
      {children}
    </Popover>
  );
};

const StyledPopover = styled(PopoverComp)(({ maxHeight }) => ({
  [`& .${popoverClasses.paper}`]: {
    // maxWidth: '450px !important',
    // width: '300px',
    // backgroundColor: 'red',
    marginTop: 'var(--spacing-2)',
    maxHeight: maxHeight || 'auto',
  },
}));

export default StyledPopover;
