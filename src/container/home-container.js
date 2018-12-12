// @flow

import { connect } from 'react-redux';

import {
  browsePopularMovie,
  browseTrendingMovie,
  searchMovies,
  getMovieDetails,
} from '../action/movie';

import Home from '../component/page/home';

const mapStateToProps = () => ({
  popularChildren: 'Browse Popular',
  trendingChildren: 'Browse Trending',
  searchChildren: 'Search Movie',
  movieProfileChildren: 'Get Movie 550',
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
  handleMovieProfile: id => {
    dispatch(getMovieDetails(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
