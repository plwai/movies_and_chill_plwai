// @flow

import { connect } from 'react-redux';

import { browsePopularMovie } from '../action/movie';

import MovieListPage from '../component/page/movie-list';

const mapStateToProps = state => ({
  movie: state.movie.popular,
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchMovie: (query: Object = {}) => {
    dispatch(browsePopularMovie(query));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListPage);
