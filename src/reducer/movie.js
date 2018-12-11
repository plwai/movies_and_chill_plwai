// @flow

import { BROWSE_MOVIE } from '../action/movie';

const initialState = {};

const movieReducer = (
  state: any = initialState,
  action: { type: string, payload: any }
) => {
  switch (action.type) {
    case BROWSE_MOVIE:
      return state;
    default:
      return state;
  }
};

export default movieReducer;
