import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import styled from '@emotion/styled';

import store from './init-store';
import Home from './container/home-container';
import Header from './component/header';

import { HOME_PAGE_ROUTE } from './routes';

const AppContainer = styled.div``;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer>
            <Header />
            <Switch>
              <Route exact path={HOME_PAGE_ROUTE} render={() => <Home />} />
            </Switch>
          </AppContainer>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
