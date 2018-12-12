import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';

import store from './init-store';
import Home from './container/home-container.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Home />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
