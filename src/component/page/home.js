// @flow

import React from 'react';

import NormalButton from '../normal-button';

type Props = {
  popularChildren: string,
  trendingChildren: string,
  searchChildren: string,
  handlePopularClick: Function,
  handleTrendingClick: Function,
  handleSearchClick: Function,
};

const Home = ({
  popularChildren,
  handlePopularClick,
  trendingChildren,
  handleTrendingClick,
  searchChildren,
  handleSearchClick,
}: Props) => (
  <div>
    <NormalButton onClick={handlePopularClick}>{popularChildren}</NormalButton>
    <NormalButton onClick={handleTrendingClick}>
      {trendingChildren}
    </NormalButton>
    <NormalButton onClick={handleSearchClick}>{searchChildren}</NormalButton>
  </div>
);

export default Home;
