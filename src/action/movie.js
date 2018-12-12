// @flow

import { createAction } from 'redux-actions';
import http from '../utils/http';

export const BROWSE_MOVIE_REQUEST = 'BROWSE_MOVIE_REQUEST';
export const BROWSE_MOVIE_FAIL = 'BROWSE_MOVIE_FAIL';
export const BROWSE_MOVIE_SUCCESS = 'BROWSE_MOVIE_SUCCESS';

const browseMovieRequest = createAction(BROWSE_MOVIE_REQUEST);
const browseMovieFail = createAction(BROWSE_MOVIE_FAIL);
const browseMovieSuccess = createAction(BROWSE_MOVIE_SUCCESS);

type SearchQueriesType = {
  page: number,
  language: string,
  includeAdult: boolean,
  region: string,
  year: number,
  primaryReleaseYear: number,
};

// Async action to fetch movie data
const browseMovie = (uri: string, query: JSON = {}) => async (
  dispatch: Function
) => {
  // Loading indicator
  dispatch(browseMovieRequest());

  try {
    const browseResult = await http.GET(uri, query);

    dispatch(browseMovieSuccess(browseResult));
  } catch (err) {
    dispatch(browseMovieFail(err));
  }
};

// Browse popular movie action
export const browsePopularMovie = () => (dispatch: Function) => {
  // Fetch movie data
  const uri = '/movie/popular';

  dispatch(browseMovie(uri));
};

// Browse trending movie action
export const browseTrendingMovie = (
  mediaType: string = 'all',
  timeWindow: string = 'day'
) => (dispatch: Function) => {
  // Fetch movie data
  const uri = `/trending/${mediaType}/${timeWindow}`;

  dispatch(browseMovie(uri));
};

// Search movie based on queries
export const searchMovies = (
  query: string,
  {
    page,
    language,
    includeAdult,
    region,
    year,
    primaryReleaseYear,
  }: SearchQueriesType = {}
) => (dispatch: Function) => {
  const uri = `/search/movie`;

  const queries = {
    query,
    page,
    language,
    includeAdult,
    region,
    year,
    primaryReleaseYear,
  };

  dispatch(browseMovie(uri, queries));
};
