import React, { Component } from 'react';
import BoardContainer from './BoardContainer/BoardContainer.js';
import Board from './Board/Board.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BoardContainer></BoardContainer>
      </div>
    );
  }
}

export default App;
