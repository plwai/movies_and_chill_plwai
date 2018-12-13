// @flow

import { createAction } from 'redux-actions';
import http from '../utils/http';

export const REQUEST_PERSON_LIST_STARTED = 'REQUEST_PERSON_LIST_STARTED';
export const REQUEST_PERSON_LIST_FAIL = 'REQUEST_PERSON_LIST_FAIL';
export const GET_PERSON_LIST_REQUEST_SUCCESS =
  'GET_PERSON_LIST_REQUEST_SUCCESS';

const requestPersonListStarted = createAction(REQUEST_PERSON_LIST_STARTED);
const requestPersonListFail = createAction(REQUEST_PERSON_LIST_FAIL);
const getPersonListRequestSuccess = createAction(
  GET_PERSON_LIST_REQUEST_SUCCESS
);

export const getPeople = (query: Object = {}) => async (dispatch: Function) => {
  // Loading indicator for profile view
  dispatch(requestPersonListStarted());

  const personUri = `/person/popular`;

  try {
    const personResult = await http.GET(personUri, query);

    dispatch(requestPersonListFail(personResult));
  } catch (err) {
    dispatch(getPersonListRequestSuccess(err));
  }
};
