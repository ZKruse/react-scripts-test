import React, { Component } from 'react';
import './App.css';

import JSComponent from './JSComponent';
import TSComponent from './TSComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({})}>Re-render!</button>
        <JSComponent/>
        <TSComponent/>
      </div>
    );
  }
}

export default App;
