// @flow

import { createAction } from 'redux-actions';
import http from '../utils/http';

export const REQUEST_PERSON_STARTED = 'REQUEST_PERSON_STARTED';
export const REQUEST_PERSON_FAIL = 'REQUEST_PERSON_FAIL';
export const GET_PERSON_DETAIL_REQUEST_SUCCESS =
  'GET_PERSON_DETAIL_REQUEST_SUCCESS';

const requestPersonStarted = createAction(REQUEST_PERSON_STARTED);
const requestPersonFail = createAction(REQUEST_PERSON_FAIL);
const getPersonDetailRequestSuccess = createAction(
  GET_PERSON_DETAIL_REQUEST_SUCCESS
);

export const getCastDetails = (id: number) => async (dispatch: Function) => {
  // Loading indicator for profile view
  dispatch(requestPersonStarted());

  const personUri = `/person/${id}`;
  const castUri = `/person/${id}/movie_credits`;

  try {
    const personResult = await http.GET(personUri);
    const castInMovie = await http.GET(castUri);

    dispatch(getPersonDetailRequestSuccess({ personResult, castInMovie }));
  } catch (err) {
    dispatch(requestPersonFail(err));
  }
};
