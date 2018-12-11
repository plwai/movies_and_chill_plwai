// @flow

import React from 'react';

import NormalButton from '../normal-button';

type Props = {
  popularChildren: string,
  trendingChildren: string,
  handlePopularClick: Function,
  handleTrendingClick: Function,
};

const Home = ({
  popularChildren,
  handlePopularClick,
  trendingChildren,
  handleTrendingClick,
}: Props) => (
  <div>
    <NormalButton onClick={handlePopularClick}>{popularChildren}</NormalButton>
    <NormalButton onClick={handleTrendingClick}>
      {trendingChildren}
    </NormalButton>
  </div>
);

export default Home;
