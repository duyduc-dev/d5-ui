import React, { forwardRef } from 'react';
import { PuffLoader } from '@components/common/Loader';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ButtonStyled = styled(Button)`
  font-family: var(--font-family);
  font-weight: 580;
  border-radius: var(--spacing-1);
  text-decoration: none;
  text-transform: none;
  padding: var(--spacing-2) var(--spacing-4);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  outline-style: none;
  appearance: none;
  white-space: nowrap;
  width: ${({ fullWidth, width }) => (fullWidth ? '100%' : width || 'auto')};
  height: ${({ height }) => height || 'auto'};
  font-size: 1.2rem;
  background-color: ${(props) => (props.disabled ? '#EFEFEF' : '#161616')};
  color: ${({ disabled }) => (disabled ? '#8F8F8F' : '#F8F8F8')};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};

  &:hover {
    background-color: #444444;
  }

  &:focus {
    outline: none;
  }
`;

const ButtonDark = forwardRef((props, ref) => {
  const { children, loading, loadingIndicator = <PuffLoader borderWidth={2} color="#f8f8f8" />, ...restProps } = props;

  return (
    <ButtonStyled {...restProps} ref={ref}>
      {loading && loadingIndicator}
      {!loading && children}
    </ButtonStyled>
  );
});

ButtonDark.displayName = 'ButtonDark';

export default ButtonDark;
