import React, { Component } from 'react';
import Root from './components/root';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Root/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
