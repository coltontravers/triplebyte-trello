import React, { Component } from 'react';
import Boards from './components/Boards/Boards.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Boards/>
      </div>
    );
  }
}

export default App;
