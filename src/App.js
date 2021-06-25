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
  const [currentPlayer, setPlayer] = useState(PLAYER_1);


  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const squareUpdate = (id) => {
    const tempSquares = [];
    let currentId = 0;
    for (let row = 0; row < 3; row += 1) {
      tempSquares.push([]);
      for (let col = 0; col < 3; col += 1) {
        let squareVal = squares[row][col].value;
        if (currentId === id){
          squareVal=currentPlayer;
        }
        tempSquares[row].push({
          id: currentId,
          value: squareVal,
        });
        currentId += 1;
      }
    }
    setSquares(tempSquares);
    if (currentPlayer === PLAYER_1){
      setPlayer(PLAYER_2);
    }
    else if (currentPlayer === PLAYER_2){
      setPlayer(PLAYER_1);

    }
  }



  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go across each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.

    // 1. Go across each row to see if 3 squares in the same row match i.e. same value
    for (let row = 0; row < 3; row += 1) {
      let countRowX = 0;
      let countRowO = 0;
      let countColX = 0;
      let countColO = 0;
      for (let col = 0; col < 3; col += 1) {
        // Rows
        if (squares[row][col].value === PLAYER_1){
          countRowX += 1;
        }
        else if (squares[row][col].value === PLAYER_2){
          countRowO += 1;
        }
        // Columns
        if (squares[col][row].value === PLAYER_1){
          countColX += 1;
        }
        else if (squares[col][row].value === PLAYER_2){
          countColO += 1;
        }
      }
      if (countRowX === 3 || countColX === 3){
        return (`Winner is ${PLAYER_1}`);
      }
      else if (countRowO === 3 || countColO === 3){
        return (`Winner is ${PLAYER_2}`);
      }
    }

    // 2. Go across each diagonal to see if all three squares have the same value.
    let diagonalX = 0;
    let diagonalO = 0;
    let inverseDiagonalX = 0;
    let inverseDiagonalO = 0;
    const inverseIdx = 2;
    for (let idx = 0; idx < 3; idx += 1) {
      // Diagonal
      if (squares[idx][idx].value === PLAYER_1){
        diagonalX += 1;
      }
      else if (squares[idx][idx].value === PLAYER_2){
        diagonalO += 1;
      }
      // Inverse Diagonal
      if (squares[inverseIdx-idx][idx].value === PLAYER_1){
        inverseDiagonalX += 1;
      }
      else if (squares[inverseIdx-idx][idx].value === PLAYER_2){
        inverseDiagonalO += 1;
      }
    }
    if (diagonalX === 3 || inverseDiagonalX === 3){
      return (`Winner is ${PLAYER_1}`);
    }
    else if (diagonalO === 3 || inverseDiagonalO === 3){
      return (`Winner is ${PLAYER_2}`);
    }
    return (`Current player is ${currentPlayer}`)

  }

  // const resetGame = () => {
  //   // Complete in Wave 4
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe Game</h1>
        <h2>{checkForWinner()}</h2>
        <div className="reset-button"><button>Reset Game</button> </div>
        
      </header>
      <main>
        <Board squares={squares} on onClickCallback={squareUpdate}/>
      </main>
    </div>
  );
};

export default App;
