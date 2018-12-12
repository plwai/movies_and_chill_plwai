import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import styled from '@emotion/styled';

import store from './init-store';
import Home from './container/home-container';
import PopularPage from './container/popular-container';
import Header from './component/header';

import { HOME_PAGE_ROUTE, POPULAR_PAGE_ROUTE } from './routes';

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
            <Header />
            <BodyContainer>
              <Switch>
                <Route exact path={HOME_PAGE_ROUTE} render={() => <Home />} />
                <Route
                  exact
                  path={POPULAR_PAGE_ROUTE}
                  render={() => <PopularPage />}
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
