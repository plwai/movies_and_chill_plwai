// @flow

import { connect } from 'react-redux';

import { browsePopularMovie, browseTrendingMovie } from '../action/movie';

import Home from '../component/page/home';

const mapStateToProps = state => ({
  trendingMovie: state.movie.trending,
  popularMovie: state.movie.popular,
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchPopular: () => {
    dispatch(browsePopularMovie());
  },
  fetchTrending: () => {
    dispatch(browseTrendingMovie());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
