import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';


const PLAYERS = ['x', 'o'];

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

const idToCoords = (id) => [Math.floor(id / 3), id % 3];


const App = () => {

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [winner, setWinner] = useState(null);

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const updateSquares = (id) => {
    if (winner !== null) {
      return;
    }

    const newSquares = [...squares];
    let [line, col] = idToCoords(id);

    if (squares[line][col].value !== '') {
      return;
    } else {
      newSquares[line][col].value = PLAYERS[currentPlayer];
      setCurrentPlayer((currentPlayer + 1) % 2);
      setSquares(newSquares);
      checkForWinner(id);
    }

  }

  const checkForWinner = (id) => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.
    let [line, col] = idToCoords(id);
    if ((squares[line][0].value === squares[line][1].value) && (squares[line][0].value === squares[line][2].value)) {
      setWinner(squares[line][0].value);
    } else if ((squares[0][col].value === squares[1][col].value) && (squares[0][col].value === squares[2][col].value)) {
      setWinner(squares[0][col].value);
    } else if ((squares[0][0].value === squares[1][1].value) && (squares[0][0].value === squares[2][2].value) && (squares[0][0].value !== '')) {
      setWinner(squares[0][0].value);
    } else if ((squares[0][2].value === squares[1][1].value) && (squares[2][0].value === squares[1][1].value) && (squares[0][2].value !== '')) {
      setWinner(squares[0][2].value);
    }
    return;
  }

  const resetGame = () => {
    setSquares(generateSquares());
    setCurrentPlayer(0);
    setWinner(null);
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner === null ? `Current Player ${PLAYERS[currentPlayer]}` : `Winner is ${winner}`}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board onClickCallback={updateSquares} squares={squares} />
      </main>
    </div>
  );
}

export default App;
