// @flow

import { connect } from 'react-redux';

import { searchMovies } from '../action/movie';

import MovieDetailedListPage from '../component/page/movie-detailed-list';

const mapStateToProps = state => ({
  movie: state.movie.search,
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchMovie: (query: Object = {}) => {
    dispatch(searchMovies(query));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailedListPage);
