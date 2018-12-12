// @flow

import { createAction } from 'redux-actions';
import http from '../utils/http';

export const REQUEST_PROFILE_STARTED = 'REQUEST_PROFILE_STARTED';
export const REQUEST_PROFILE_FAIL = 'REQUEST_PROFILE_FAIL';
export const BROWSE_DETAIL_REQUEST_SUCCESS = 'BROWSE_DETAIL_REQUEST_SUCCESS';

const requestProfileStarted = createAction(REQUEST_PROFILE_STARTED);
const requestProfileFail = createAction(REQUEST_PROFILE_FAIL);

const browseDetailRequestSuccess = createAction(BROWSE_DETAIL_REQUEST_SUCCESS);

// Async function to get movie details based on movie id
export const getMovieDetails = (id: number) => async (dispatch: Function) => {
  // Loading indicator for profile view
  dispatch(requestProfileStarted());

  const uri = `/movie/${id}`;

  try {
    const browseResult = await http.GET(uri);

    dispatch(browseDetailRequestSuccess(browseResult));
  } catch (err) {
    dispatch(requestProfileFail(err));
  }
};
