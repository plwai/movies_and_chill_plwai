import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NoStyleNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &:visited {
    text-decoration: none;
  }
`;
