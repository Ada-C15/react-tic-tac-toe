import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());

  const [currentPlayer, changePlayer] = useState(PLAYER_1)

  // Wave 2
  const makeMove = (id, currentPlayer) => {
    if (id == 0) {
      squares[0][0].value = currentPlayer;
    } else if (id == 1) {
      squares[0][1].value = currentPlayer;
    } else if (id == 2) {
      squares[0][2].value = currentPlayer;
    } else if (id == 3) {
      squares[1][0].value = currentPlayer;
    } else if (id == 4) {
      squares[1][1].value = currentPlayer;
    } else if (id == 5) {
      squares[1][2].value = currentPlayer;
    } else if (id == 6) {
      squares[2][0].value = currentPlayer;
    } else if (id == 7) {
      squares[2][1].value = currentPlayer;
    } else if (id == 8) {
      squares[2][2].value = currentPlayer;
    }
  }
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const switchTurns = () => {
    if (currentPlayer == PLAYER_1) {
      changePlayer(PLAYER_2);
    } else {
      changePlayer(PLAYER_1);
    }
  }

  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.

  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={ squares } onClickCallback={ makeMove } />
      </main>
    </div>
  );
}

export default App;
