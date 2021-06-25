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
  const [spacesLeft, setSpacesLeft] = useState(9);
  // console.log(squares);

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const updateGame = (updateId) => {
    if (squares[Math.floor(updateId / 3)][updateId % 3].value !== '' || winner) {
      return;
    }
    const currentGame = [];
    for (let row = 0; row < 3; row++) {
      currentGame.push([]);
      for (let col = 0; col < 3; col++) {
        if (squares[row][col].id === updateId) {
          currentGame[row].push({
            id: updateId,
            value: (spacesLeft % 2) ? PLAYER_1.toLowerCase() : PLAYER_2.toLowerCase(),
          });
        }
        else {
          currentGame[row].push(squares[row][col]);
        };
      };
    }

    setSquares(currentGame);
    setSpacesLeft(spacesLeft -1);
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

    for (let count = 0; count < 3; count++) {
      if (squares[count][0].value !== '' && 
      squares[count][0].value === squares[count][1].value &&
      squares[count][0].value === squares[count][2].value) {
        return squares[count][0].value;
      }
      else if (squares[0][count].value !== '' &&
      squares[0][count].value === squares[1][count].value &&
      squares[0][count].value === squares[2][count].value) {
        return squares[0][count].value;
      }
    };

    if (squares[1][1].value !== '') {
      if (squares[0][0].value === squares[1][1].value &&
      squares[1][1].value === squares[2][2].value) {
        return squares[1][1].value;
      } else if (squares[0][2].value === squares[1][1].value &&
      squares[1][1].value === squares[2][0].value) {
        return squares[1][1].value;
      }
    }

    if (spacesLeft < 1) {
      return 'a tie 👔';
    } else {
      return null;
    }
  }

  const resetGame = () => {
    // Complete in Wave 4
    setSquares(generateSquares());
    setSpacesLeft(9);
  }

  const winner = checkForWinner();

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {winner}</h2>
        <button onClick={resetGame} >Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateGame}></Board>
      </main>
    </div>
  );
}

export default App;
