// @flow

import { connect } from 'react-redux';

import { getMovieDetails } from '../action/movie-profile';

import MovieProfilePage from '../component/page/movie-profile';

const mapStateToProps = state => ({
  movieProfile: state.movieProfile,
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchMovieDetail: (id: number) => {
    dispatch(getMovieDetails(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieProfilePage);
