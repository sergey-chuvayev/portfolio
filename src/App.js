import React, { Component } from 'react';
import Root from './components/root';

class App extends Component {
  render() {
    return (
      <div className="app">
          {JSON.stringify(this.props.projects)}
          <Root/>
      </div>
    );
  }
}

export default App;
