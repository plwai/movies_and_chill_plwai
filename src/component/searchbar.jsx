// @flow

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import styled from '@emotion/styled';

import { SEARCH_PAGE_ROUTE } from '../routes';

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

type Props = {
  history: any,
};

class SearchBar extends Component<Props> {
  handleSearchEnter = ({ keyCode, target: { value } }: any) => {
    // Stop if empty
    if (value === '') {
      return;
    }

    // ENTER
    if (keyCode === 13) {
      console.log(this.props);
      const { history } = this.props;

      history.push(`${SEARCH_PAGE_ROUTE}?searchQuery=${value}`);
    }
  };

  render() {
    return (
      <SearchContainer>
        <StyledSearchIcon />
        <InputBase
          onKeyDown={e => this.handleSearchEnter(e)}
          placeholder="Search…"
        />
      </SearchContainer>
    );
  }
}

export default withRouter(SearchBar);
