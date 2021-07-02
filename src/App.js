import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';

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

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState(null);

  const updateSquares = (id) => {

    if (winner === PLAYER_1 || winner === PLAYER_2) return;

    let clickedSquare = squares.flat().find(square => square.id === id);
    if (clickedSquare.value !== '') return;
    clickedSquare.value = currentPlayer;
    
    //  check who the current player is
    if (currentPlayer == PLAYER_1) {
      setCurrentPlayer(PLAYER_2);
    } else {
      setCurrentPlayer(PLAYER_1);
    };
    setWinner(checkForWinner());
  };


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
    
    //check if winner is in rows else they are in columns:
    for (let i = 0; i < 3; i++) {
      if (squares[i][0].value === squares[i][1].value && squares[i][1].value === squares[i][2].value && squares[i][0].value !== '') {
        return squares[i][0].value;
      } else if (squares[0][i].value === squares[1][i].value && squares[1][i].value === squares[2][i].value && squares [0][i].value !== '') {
        return squares[0][i].value;
      } 
    }
    //winner in both diagonals:
    if (squares[0][0].value === squares[1][1].value && squares[1][1].value === squares[2][2].value & squares[0][0].value !== '') {
      return squares[0][0].value;
    } else if (squares[0][2].value === squares[1][1].value && squares[1][1].value === squares[2][0].value && squares[0][0].value !== '') {
      return squares[0][2].value;
    } 

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (squares[r][c].value === '') {
          return null;
        }
      }}
      //returning null if there are empty squares
      return 'Tie';

  };

  function reset() {
    // Complete in Wave 4
    setSquares(generateSquares())
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Current player is {currentPlayer}</h2>
        <h2>The winner is ...{winner} </h2>
        <button className="reset" onClick={reset}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquares} />
      </main>
    </div>
  );
}

export default App;
