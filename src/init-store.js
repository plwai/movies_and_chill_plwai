// @flow

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import MovieReducer from './reducer/movie';
import PersonReducer from './reducer/person';

const initialState = {};
const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  combineReducers({
    movie: MovieReducer,
    person: PersonReducer,
  }),
  initialState,
  composedEnhancers
);

export default store;
