// @flow

import {
  REQUEST_PROFILE_STARTED,
  REQUEST_PROFILE_FAIL,
  BROWSE_DETAIL_REQUEST_SUCCESS,
} from '../action/movie-profile';

const initialState = {
  loading: false,
  id: 0,
  movieDetail: {},
  cast: [],
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
          browseResult: {
            id,
            title,
            overview,
            runtime,
            release_date,
            production_companies,
            poster_path,
            vote_average,
            video,
          },
          creditResult: { cast },
          videosResult: { results },
        },
      } = action;

      const movieDetail = {
        title,
        overview,
        runtime,
        release_date,
        production_companies,
        poster_path,
        vote_average,
        video,
      };

      return Object.assign({}, state, {
        loading: false,
        id,
        movieDetail,
        cast,
        videos: results,
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
