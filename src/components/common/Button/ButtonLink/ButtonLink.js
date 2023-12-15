import { Link } from 'react-router-dom';
import { styled } from '@mui/material';

const ButtonLink = styled(Link)`
  font-family: var(--font-family);
  background-color: transparent;
  text-decoration: none;
  color: var(--neutrals-grey-5);
  text-transform: none;
  margin-left: 0;
  padding: var(--spacing-2) var(--spacing-4);
  cursor: pointer;
  text-align: center;
  line-height: var(--spacing-14px);
  font-weight: var(--font-weight-medium);
  font-size: var(--spacing-3);
  transition: all 0.2s linear;

  &:hover {
    color: currentColor !important;
    background-color: transparent;
    text-decoration: underline;
  }
`;

export default ButtonLink;
