// @flow

import { connect } from 'react-redux';

import {
  browsePopularMovie,
  browseTrendingMovie,
  searchMovies,
} from '../action/movie';

import Home from '../component/page/home';

const mapStateToProps = () => ({
  popularChildren: 'Browse Popular',
  trendingChildren: 'Browse Trending',
  searchChildren: 'Search Movie',
});

const mapDispatchToProps = dispatch => ({
  handlePopularClick: () => {
    dispatch(browsePopularMovie());
  },
  handleTrendingClick: () => {
    dispatch(browseTrendingMovie());
  },
  handleSearchClick: () => {
    dispatch(searchMovies(''));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
