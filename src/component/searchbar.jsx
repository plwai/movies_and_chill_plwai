import React, { Component } from 'react';
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

class SearchBar extends Component {
  constructor(props: Props) {
    super();

    this.timer = null;
    this.timeout = 1000;
  }

  timer: any;
  timeout: number;

  handleSearchChange = ({ target: { value } }: any) => {
    clearTimeout(this.timer);

    // Stop if empty
    if (value === '') {
      return;
    }

    this.timer = setTimeout(() => {
      const { handleSearch } = this.props;

      handleSearch(value);
    }, this.timeout);
  };

  handleSearchEnter = ({ keyCode, target: { value } }: any) => {
    // Stop if empty
    if (value === '') {
      return;
    }

    // ENTER
    if (keyCode === 13) {
      clearTimeout(this.timer);

      const { handleSearch } = this.props;

      handleSearch(value);
    }
  };

  render() {
    return (
      <SearchContainer>
        <StyledSearchIcon />
        <InputBase placeholder="Search…" />
      </SearchContainer>
    );
  }
}

export default SearchBar;
