import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import store from './init-store';
import BrowseButton from './container/browse-button.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <BrowseButton />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
