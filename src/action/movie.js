// @flow

import { createAction } from 'redux-actions';
import http from '../utils/http';

export const BROWSE_MOVIE_REQUEST = 'BROWSE_MOVIE_REQUEST';
export const BROWSE_MOVIE_FAIL = 'BROWSE_MOVIE_FAIL';
export const BROWSE_MOVIE_SUCCESS = 'BROWSE_MOVIE_SUCCESS';

const browseMovieRequest = createAction(BROWSE_MOVIE_REQUEST);
const browseMovieFail = createAction(BROWSE_MOVIE_FAIL);
const browseMovieSuccess = createAction(BROWSE_MOVIE_SUCCESS);

// Async action to fetch movie data
export const browsePopularMovie = () => async (dispatch: Function) => {
  // Loading indicator
  dispatch(browseMovieRequest());

  // Fetch movie data
  const uri = '/movie/popular';

  try {
    const browseResult = await http.GET(uri);

    dispatch(browseMovieSuccess(browseResult));
  } catch (err) {
    dispatch(browseMovieFail(err));
  }
};
