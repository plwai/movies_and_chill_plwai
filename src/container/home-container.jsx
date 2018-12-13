// @flow

import { connect } from 'react-redux';

import { browseTrendingMovie } from '../action/movie';

import Home from '../component/page/home';

const mapStateToProps = state => ({
  trendingMovie: state.movie.trending,
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchTrending: () => {
    dispatch(browseTrendingMovie());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
