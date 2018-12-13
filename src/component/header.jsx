import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import { NoStyleNavLink } from './styles/nav-link';
import SearchBar from './searchbar';
import Nav from './nav';
import { HOME_PAGE_ROUTE } from '../routes';
import {
  StyledToolbar,
  MenuContainer,
  NavContainer,
} from './styles/header-style';

const Header = () => (
  <AppBar position="fixed">
    <StyledToolbar>
      <MenuContainer>
        <NoStyleNavLink to={HOME_PAGE_ROUTE} exact>
          <h1>Movies and Chill</h1>
        </NoStyleNavLink>
        <NavContainer>
          <Nav />
        </NavContainer>
      </MenuContainer>
      <SearchBar />
    </StyledToolbar>
  </AppBar>
);

export default Header;
