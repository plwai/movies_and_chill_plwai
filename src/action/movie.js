// @flow

import { createAction } from 'redux-actions';
import http from '../utils/http';

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_FAIL = 'REQUEST_FAIL';
export const BROWSE_REQUEST_SUCCESS = 'BROWSE_REQUEST_SUCCESS';

const requestStarted = createAction(REQUEST_STARTED);
const requestFail = createAction(REQUEST_FAIL);
const browseRequestSuccess = createAction(BROWSE_REQUEST_SUCCESS);

type SearchQueriesType = {
  page: number,
  language: string,
  includeAdult: boolean,
  region: string,
  year: number,
  primaryReleaseYear: number,
};

// Async action to fetch movie data
const browseMovie = (uri: string, query: Object = {}) => async (
  dispatch: Function
) => {
  // Loading indicator
  dispatch(requestStarted());

  try {
    const browseResult = await http.GET(uri, query);

    dispatch(browseRequestSuccess(browseResult));
  } catch (err) {
    dispatch(requestFail(err));
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
