// @flow

import {
  REQUEST_STARTED,
  REQUEST_FAIL,
  BROWSE_REQUEST_SUCCESS,
} from '../action/movie';

const initialState = {
  loading: false,
  movie: [],
  movieDetail: {},
};

const movieReducer = (
  state: any = initialState,
  action: { type: string, payload: any }
) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return Object.assign({}, state, {
        loading: true,
      });

    case BROWSE_REQUEST_SUCCESS: {
      const {
        payload: { results },
      } = action;

      const movie = results.map(
        ({ poster_path, release_date, title, vote_average, overview }) => {
          return { poster_path, release_date, title, vote_average, overview };
        }
      );

      return Object.assign({}, state, {
        loading: false,
        movie,
      });
    }

    case REQUEST_FAIL: {
      return Object.assign({}, state, {
        loading: false,
      });
    }

    default:
      return state;
  }
};

export default movieReducer;
