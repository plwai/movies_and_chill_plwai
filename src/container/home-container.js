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

const mapDispatchToProps = (dispatch: Function) => ({
  handlePopular: () => {
    dispatch(browsePopularMovie());
  },
  handleTrending: () => {
    dispatch(browseTrendingMovie());
  },
  handleSearch: query => {
    dispatch(searchMovies(query));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
