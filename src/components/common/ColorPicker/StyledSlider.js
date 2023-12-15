import React, { forwardRef } from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const SliderComp = forwardRef(({ bgLabel, value, ...restProps }, ref) => {
  return <Slider ref={ref} data-bg-label={bgLabel} value={value} {...restProps} />;
});

SliderComp.displayName = 'SliderComp';

const StyledSlider = styled(SliderComp)(({ bgLabel }) => ({
  height: '8px',
  '& .MuiSlider-thumb': {
    width: 16,
    height: 16,
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: bgLabel ?? '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
}));

export default StyledSlider;
