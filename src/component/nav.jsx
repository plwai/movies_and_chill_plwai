// @flow

import React from 'react';
import { StyledNavLink } from './styles/nav-link';
import styled from '@emotion/styled';

import {
  HOME_PAGE_ROUTE,
  TRENDING_PAGE_ROUTE,
  POPULAR_PAGE_ROUTE,
  PEOPLE_PAGE_ROUTE,
} from '../routes';

const StyledNavContainer = styled.div`
  display: flow;
`;

const StyledNavLinkContainer = styled.div`
  padding-left: 5px;
  padding-right: 5px;
`;

const Nav = () => (
  <nav>
    <StyledNavContainer>
      {[
        { route: HOME_PAGE_ROUTE, label: 'Home' },
        { route: TRENDING_PAGE_ROUTE, label: 'Trending' },
        { route: POPULAR_PAGE_ROUTE, label: 'Popular' },
        { route: PEOPLE_PAGE_ROUTE, label: 'People' },
      ].map(link => (
        <StyledNavLinkContainer key={link.route}>
          <StyledNavLink
            to={link.route}
            activeStyle={{ color: 'limegreen' }}
            exact
          >
            <h3>{link.label}</h3>
          </StyledNavLink>
        </StyledNavLinkContainer>
      ))}
    </StyledNavContainer>
  </nav>
);

export default Nav;
