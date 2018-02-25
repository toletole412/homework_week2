import React, { Component } from 'react';
import Board from './containers/Board'
import GuessButton from './components/GuessButton'
import Guess from './components/Guess'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="actions">
          <GuessButton />
        </div>

        <Guess />

        <Board />
      </div>
    )
  }
}

export default App;
