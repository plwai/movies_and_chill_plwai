import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from '@emotion/styled';

import { NoStyleNavLink } from './styles/nav-link';
import SearchBar from './searchbar';
import Nav from './nav';
import { HOME_PAGE_ROUTE } from '../routes';

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavContainer = styled.div`
  margin-left: 25px;
`;

const Title = styled.h1``;

const Header = () => (
  <AppBar position="static">
    <StyledToolbar>
      <MenuContainer>
        <NoStyleNavLink to={HOME_PAGE_ROUTE} exact>
          <Title>Movies and Chill</Title>
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
