// @flow

import {
  REQUEST_PROFILE_STARTED,
  REQUEST_PROFILE_FAIL,
  BROWSE_DETAIL_REQUEST_SUCCESS,
} from '../action/movie-profile';

const initialState = {
  loading: false,
  movieDetail: {},
};

const movieReducer = (
  state: any = initialState,
  action: { type: string, payload: any }
) => {
  switch (action.type) {
    case REQUEST_PROFILE_STARTED:
      return Object.assign({}, state, {
        loading: true,
      });

    case BROWSE_DETAIL_REQUEST_SUCCESS: {
      const {
        payload: {
          title,
          overview,
          runtime,
          release_date,
          production_companies,
        },
      } = action;

      const movieDetail = {
        title,
        overview,
        runtime,
        release_date,
        production_companies,
      };

      return Object.assign({}, state, {
        loading: false,
        movieDetail,
      });
    }

    case REQUEST_PROFILE_FAIL: {
      return Object.assign({}, state, {
        loading: false,
      });
    }

    default:
      return state;
  }
};

export default movieReducer;
