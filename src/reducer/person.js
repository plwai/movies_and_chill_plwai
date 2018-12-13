// @flow

import {
  REQUEST_PERSON_LIST_STARTED,
  REQUEST_PERSON_LIST_FAIL,
  GET_PERSON_LIST_REQUEST_SUCCESS,
} from '../action/person';

const initialState = {
  loading: false,
  results: [],
  page: 1,
};

const personReducer = (
  state: any = initialState,
  action: { type: string, payload: any }
) => {
  switch (action.type) {
    case REQUEST_PERSON_LIST_STARTED:
      return Object.assign({}, state, {
        loading: true,
      });

    case REQUEST_PERSON_LIST_FAIL: {
      const {
        payload: { results, page },
      } = action;

      return Object.assign({}, state, {
        loading: false,
        results: [...state.results, ...results],
        page,
      });
    }

    case GET_PERSON_LIST_REQUEST_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
      });
    }

    default:
      return state;
  }
};

export default personReducer;
