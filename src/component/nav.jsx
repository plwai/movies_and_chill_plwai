// @flow

import React from 'react';
import { StyledNavLink } from './styles/nav-link';
import { StyledNavContainer, StyledNavLinkContainer } from './styles/nav-style';

import {
  HOME_PAGE_ROUTE,
  POPULAR_PAGE_ROUTE,
  PEOPLE_PAGE_ROUTE,
} from '../routes';

const Nav = () => (
  <nav>
    <StyledNavContainer>
      {[
        { route: HOME_PAGE_ROUTE, label: 'Home' },
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
