import React, { Component } from 'react';
import './App.css';
import ClockLayersContainer from './Clock/ClockLayersContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClockLayersContainer/>
      </div>
    );
  }
}

export default App;
