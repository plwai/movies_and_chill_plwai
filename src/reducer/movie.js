// @flow

import {
  BROWSE_MOVIE_REQUEST,
  BROWSE_MOVIE_SUCCESS,
  BROWSE_MOVIE_FAIL,
} from '../action/movie';

const initialState = {
  loading: false,
  searchQueries: {},
  movie: [],
};

const movieReducer = (
  state: any = initialState,
  action: { type: string, payload: any }
) => {
  switch (action.type) {
    case BROWSE_MOVIE_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });
    case BROWSE_MOVIE_SUCCESS:
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
    case BROWSE_MOVIE_FAIL:
      return Object.assign({}, state, {
        loading: false,
      });
    default:
      return state;
  }
};

export default movieReducer;
