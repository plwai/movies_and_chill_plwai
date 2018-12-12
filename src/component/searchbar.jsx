import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import styled from '@emotion/styled';

const StyledSearchIcon = styled(SearchIcon)`
  padding-right: 5px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 25px;
  padding-left: 10px;
  padding-right: 10px;
  background: rgba(255, 255, 255, 0.35);
`;

const SearchBar = () => (
  <SearchContainer>
    <StyledSearchIcon />
    <InputBase placeholder="Search…" />
  </SearchContainer>
);

export default SearchBar;
