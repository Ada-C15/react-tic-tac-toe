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
  const [squares, setSquares] = useState(generateSquares()); //useState of Player1 that updates so with setPlayer
  const [player, setPlayer] = useState(PLAYER_1);
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  //need to iterate through the board and see if the place they click will make an x or o. tied to ids
  const markSpace = (spaceId) => {
    for (let row = 0; row < 3; row += 1) {
      for (let column = 0; column < 3; column += 1) {
        if (squares[row][column].id === spaceId) {
          squares[row][column].value = player;
        }
      }
    }
    setSquares(squares); //set up like the toggle button color in examples but start at player 1 then keep switching between the players
    setPlayer(player === PLAYER_1 ? PLAYER_2 : PLAYER_1);
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
    //Check rows
    //First row
    if (squares[0][0] !== '' && squares[0][0].value === squares[0][1].value && squares[0][1].value === squares[0][2].value) {
      return squares[0][0].value;
    }
    //Second row
    if (squares[1][0] !== '' && squares[1][0].value === squares[1][1].value && squares[1][1].value === squares[1][2].value) {
      return squares[1][0].value;
    }
    //Third row
    if (squares[2][0] !== '' && squares[2][0].value === squares[2][1].value && squares[2][1].value === squares[2][2].value) {
      return squares[2][0].value;
    }

    //Columns
    //First column
    if (squares[0][0] !== '' && squares[0][0].value === squares[1][0].value && squares[1][0].value === squares[2][0].value) {
      return squares[0][0].value;
    }
    //Second column
    if (squares[0][1] !== '' && squares[0][1].value === squares[1][1].value && squares[1][1].value === squares[2][1].value) {
      return squares[0][1].value;
    }
    //Third column
    if (squares[0][2] !== '' && squares[0][2].value === squares[1][2].value && squares[1][2].value === squares[2][2].value) {
      return squares[0][2].value;
    }

    //Diagonals
    //left to right
    if (squares[0][0] !== '' && squares[0][0].value === squares[1][1].value && squares[1][1].value === squares[2][2].value) {
      return squares[0][0].value;
    }
    //top right-bottom left
    if (squares[0][2] !== '' && squares[0][2].value === squares[1][1].value && squares[1][1].value === squares[2][0].value) {
      return squares[0][2].value;
    }

    //Tie iterate through the grid to find empty spaces
    for (let row = 0; row < 3; row += 1) {
      for (let column = 0; column < 3; column += 1) {
        if (squares[row][column].value === '') {
          return '';
        }
      }
    }
    return 'No one won it\'s a Tie';
  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {checkForWinner()} </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={markSpace}/>
      </main>
    </div>
  );
}

export default App;
