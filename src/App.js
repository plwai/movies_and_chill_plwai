import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';

import store from './init-store';

import Header from './component/header';
import Home from './container/home-container';
import PopularPage from './container/popular-container';
import SearchPage from './container/search-container';
import PeoplePage from './container/people-container';
import MovieProfilePage from './container/movie-profile-container.jsx';
import PeopleProfilePage from './container/people-profile-container.jsx';

import {
  HOME_PAGE_ROUTE,
  POPULAR_PAGE_ROUTE,
  SEARCH_PAGE_ROUTE,
  MOVIE_PROFILE_PAGE_ROUTE,
  PEOPLE_PROFILE_PAGE_ROUTE,
  PEOPLE_PAGE_ROUTE,
} from './routes';

const AppContainer = styled.div``;

const BodyContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer>
            <Helmet>
              <meta charSet="utf-8" />
              <title>Movies and Chill</title>
            </Helmet>
            <Header />
            <BodyContainer>
              <Switch>
                <Route exact path={HOME_PAGE_ROUTE} render={() => <Home />} />
                <Route
                  exact
                  path={POPULAR_PAGE_ROUTE}
                  render={() => <PopularPage />}
                />
                <Route
                  exact
                  path={SEARCH_PAGE_ROUTE}
                  render={() => <SearchPage />}
                />
                <Route
                  exact
                  path={MOVIE_PROFILE_PAGE_ROUTE}
                  render={() => <MovieProfilePage />}
                />
                <Route
                  exact
                  path={PEOPLE_PROFILE_PAGE_ROUTE}
                  render={() => <PeopleProfilePage />}
                />
                <Route
                  exact
                  path={PEOPLE_PAGE_ROUTE}
                  render={() => <PeoplePage />}
                />
              </Switch>
            </BodyContainer>
          </AppContainer>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
