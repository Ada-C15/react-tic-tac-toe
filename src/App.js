import { findAllByTestId } from '@testing-library/react';
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
  // player 1, initial state
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  // Initial number of squares filled == 0
  const [numSquaresFilled, setNumSquaresFilled] = useState(0);
  // initial winner is Null
  const [winner, setWinner] = useState(null);

  // similar funcationality to PSE 10 code
  const checkForWinner = () => {
  
    let i = 0;
    while (i < 3) {
       // row win
      if (squares[i][0].value === squares[i][1].value &&
        squares[i][2].value === squares[i][1].value &&
        squares[i][0].value !== '') {
          return squares[i][0].value;
        }
      // column win
      else if (squares[0][i].value === squares[1][i].value &&
        squares[2][i].value === squares[1][i].value &&
        squares[0][i].value !== '') {
          return squares[0][i];
        }
        i += 1;
    }
    // Diagonal win - left to right
    if (squares[0][0].value === squares[1][1].value &&
      squares[2][2].value === squares[1][1].value &&
      squares[1][1].value !== '') {
        return squares[0][0].value;
      }
    // Diagonal win - right to left
    if (squares[0][2].value === squares[1][1].value &&
      squares[2][0].value === squares[1][1].value &&
      squares[1][1].value !== '') {
        return squares[1][1].value;
      }
    // if none of the conditions above evaluate to true, return null
    return null;
    }

  const updateSquares = (id) => {
    if (winner !== null) return;

    // flatten out copy of squares
    const newSquares = [...squares];
    let row = 0;
    let col = 0;
    let match = false;

    while (row < 3 && !match) {
      while (col < 3 && !match) {
        let currentSquare = newSquares[row][col];
        // if id passed in matches the currentSquare
        if (currentSquare.id === id) {
          // check currentSquare
          console.log(currentSquare);
          // return statement to end function
          if (currentSquare.value !== '') return;

          // set match to true;
          match = true;
          // set default player = PLAYER_1
          currentSquare.value = currentPlayer;
          // update the squaresFilled (currently one square behind)
          setNumSquaresFilled(numSquaresFilled + 1);
          // switch player
          if (currentPlayer === PLAYER_1) {
            setCurrentPlayer(PLAYER_2)
          } else {
            setCurrentPlayer(PLAYER_1);
          }
        }
        col += 1;
      }
      row += 1;
      col = 0;
    }
    setWinner(checkForWinner());
    // update square content
    setSquares(newSquares);
  }

  const resetGame = () => {
    // return to initial empty board
    setSquares(generateSquares());
    // default set player
    setCurrentPlayer('x');
    // make sure all squares empty
    setNumSquaresFilled(0);
    // no winner yet
    setWinner(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} />
      </main>
    </div>
  );
}

export default App;
