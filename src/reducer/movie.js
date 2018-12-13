// @flow

import {
  REQUEST_STARTED,
  REQUEST_FAIL,
  BROWSE_REQUEST_SUCCESS,
} from '../action/movie';

const initialState = {
  trending: {
    movie: [],
    loading: false,
    error: '',
  },
  popular: {
    movie: [],
    loading: false,
    page: 1,
    error: '',
  },
  search: {
    movie: [],
    loading: false,
    page: 1,
    error: '',
  },
};

const movieReducer = (
  state: any = initialState,
  action: { type: string, payload: any }
) => {
  switch (action.type) {
    case REQUEST_STARTED:
      const {
        payload: { mode },
      } = action;

      const newStates = {};
      newStates[mode] = {
        loading: true,
        error: '',
        movie: [...state[mode].movie],
        page: state[mode].page,
      };

      return Object.assign({}, state, newStates);

    case BROWSE_REQUEST_SUCCESS: {
      const {
        payload: {
          browseResult: { results, page },
          mode,
        },
      } = action;

      // Filter new movie states
      const newMovie = results.map(
        ({
          id,
          poster_path,
          release_date,
          title,
          name,
          vote_average,
          overview,
        }) => {
          if (title === undefined) {
            // For old database
            title = name;
          }

          return {
            id,
            poster_path,
            release_date,
            title,
            vote_average,
            overview,
          };
        }
      );

      // Concat old state with new state
      const movie = [...state[mode].movie, ...newMovie];

      const newStates = {};
      newStates[mode] = {
        loading: false,
        movie,
        page,
      };

      return Object.assign({}, state, newStates);
    }

    case REQUEST_FAIL: {
      const {
        payload: { err, mode },
      } = action;

      const newStates = {};
      newStates[mode] = {
        loading: false,
        error: err.message,
        movie: [...state[mode].movie],
        page: state[mode].page,
      };

      return Object.assign({}, state, newStates);
    }

    default:
      return state;
  }
};

export default movieReducer;
