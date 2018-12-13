// @flow

import {
  REQUEST_PERSON_STARTED,
  REQUEST_PERSON_FAIL,
  GET_PERSON_DETAIL_REQUEST_SUCCESS,
} from '../action/person-profile';

const initialState = {
  loading: false,
  personResult: {},
  castInMovie: { cast: [], crew: [] },
};

const personReducer = (
  state: any = initialState,
  action: { type: string, payload: any }
) => {
  switch (action.type) {
    case REQUEST_PERSON_STARTED:
      return Object.assign({}, state, {
        loading: true,
      });

    case GET_PERSON_DETAIL_REQUEST_SUCCESS: {
      const {
        payload: { personResult, castInMovie },
      } = action;

      return Object.assign({}, state, {
        loading: false,
        personResult,
        castInMovie,
      });
    }

    case REQUEST_PERSON_FAIL: {
      return Object.assign({}, state, {
        loading: false,
      });
    }

    default:
      return state;
  }
};

export default personReducer;
