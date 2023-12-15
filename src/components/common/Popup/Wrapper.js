import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { animated } from '@react-spring/web';

const Box = styled(animated.div)``;

const Wrapper = forwardRef(({ children, style, className, ...restProps }, ref) => {
  return (
    <Box style={style} ref={ref} {...restProps} className={className}>
      {children}
    </Box>
  );
});

Wrapper.displayName = 'Wrapper';

export default Wrapper;
