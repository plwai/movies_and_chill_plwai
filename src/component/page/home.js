// @flow

import React, { Component } from 'react';

import NormalButton from '../normal-button';
import NormalTextField from '../normal-textfield';

type Props = {
  popularChildren: string,
  trendingChildren: string,
  movieProfileChildren: string,
  personProfileChildren: string,
  handlePopular: Function,
  handleTrending: Function,
  handleSearch: Function,
  handleMovieProfile: Function,
  hanldePersonProfile: Function,
};

class Home extends Component<Props> {
  constructor(props) {
    super();

    this.timer = null;
    this.timeout = 1000;
  }

  handleSearchChange = ({ target: { value } }) => {
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

  handleSearchEnter = ({ keyCode, target: { value } }) => {
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
    const {
      popularChildren,
      handlePopular,
      trendingChildren,
      handleTrending,
      movieProfileChildren,
      handleMovieProfile,
      personProfileChildren,
      hanldePersonProfile,
    } = this.props;

    return (
      <div>
        <NormalButton onClick={handlePopular}>{popularChildren}</NormalButton>
        <NormalButton onClick={handleTrending}>{trendingChildren}</NormalButton>
        <NormalTextField
          id="Search Field"
          label="Search Movie"
          placeholder="Type the keywords"
          onChange={this.handleSearchChange}
          onKeyDown={this.handleSearchEnter}
        />
        <NormalButton onClick={() => handleMovieProfile(550)}>
          {movieProfileChildren}
        </NormalButton>
        <NormalButton onClick={() => hanldePersonProfile(287)}>
          {personProfileChildren}
        </NormalButton>
      </div>
    );
  }
}
export default Home;
