import React from 'react';
import { styled } from '@mui/material/styles';
import OriginalTooltip, { tooltipClasses } from '@mui/material/Tooltip';

const TooltipComponent = (props) => {
  const { className, ...rest } = props;

  return (
    <OriginalTooltip
      arrow={false}
      {...rest}
      classes={{ popper: className }}
      componentsProps={{ tooltip: { className } }}
    />
  );
};

const TooltipStyled = styled(TooltipComponent)(() => {
  return {
    [`&.${tooltipClasses.popper}`]: {
      zIndex: 99999,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'rgb(68, 68, 68)',
      height: '24px',
      padding: 'var(--spacing-1) var(--spacing-4)',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '4px',
      fontSize: '13px',
      fontStyle: 'normal',
      fontWeight: '580',
      lineHeight: '20px',
      color: '#F8F8F8',
      display: 'flex',
      borderRadius: '4px',
      fontFamily: 'Satoshi Variable',
      position: 'relative',
      maxWidth: 'none',
      marginLeft: '0px',
    },
  };
});

const Tooltip = TooltipStyled;

export default Tooltip;
