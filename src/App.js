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
  //  State: 1 for keeping count of which square index has been clicked,
  //  1 for keeping track of which player_1 (X) or player_2 (O) is clicking which square
  //  1 for how many squares are filled, the game has to stop once 9 squares have been filled
  //  1 for the winner, to set either player_1 or player_2 equal to winner 

  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState(null);

  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:s
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.

    // check (if) winner in row and (elif) winner in column:
    for (let i = 0; i < 3; i++) {
      if (squares[i][0].value === squares[i][1].value && squares[i][1].value === squares[i][2].value && squares[i][0].value !== '') {
        return squares[i][0].value;
      } else if (squares[0][i].value === squares[1][i].value && squares[1][i].value === squares[2][i].value && squares [0][i].value !== '') {
        return squares[0][i].value;
      } 
    }

    // check if winner in both diagonals:
    if (squares[0][0].value === squares[1][1].value && squares[1][1].value === squares[2][2].value & squares[0][0].value !== '') {
      return squares[0][0].value;
    } else if (squares[0][2].value === squares[1][1].value && squares[1][1].value === squares[2][0].value && squares[0][0].value !== '') {
      return squares[0][2].value;
    } 
    // create a loop, count the blank squares, if there are 0 blank squares -> tie 
    // for (let i = 0; i < 3; i++) {

    // } 
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (squares[r][c].value === '') {
          return null;
        }
      }}

  
    //  returning  null if there are still empty spaces
    return 'Tie';

    // last else -> return tie if all spaces are filled but there's no winner 

  };

  // Wave 2
  // You will need to create a method to change the square When it is clicked on then pass it into the squares as a callback
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

  

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Current player is {currentPlayer}</h2>
        <h2>The winner is ...{winner}</h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquares} />
      </main>
    </div>
  );
}

export default App;
