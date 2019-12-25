// @flow

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import MovieReducer from './reducer/movie';
import MovieProfile from './reducer/movie-profile';
import PersonReducer from './reducer/person';
import PersonProfileReducer from './reducer/person-profile';

const initialState = {};
const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(
  combineReducers({
    movie: MovieReducer,
    person: PersonReducer,
    personProfile: PersonProfileReducer,
    movieProfile: MovieProfile,
  }),
  initialState,
  composedEnhancers
);

export default store;
