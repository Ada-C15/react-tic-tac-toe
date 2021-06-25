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
  const [xPlayer, setNext] = useState(true);
  const [winner, setWinner] = useState(null)





  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  // send in new board list below
  const updateSquareData = (id) => {
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        let square = squares[row][col]
        if (square.id === id) {
          if (xPlayer === true) {
            square.value = 'X'
            setNext(false)
          }
          else {
            square.value = 'O'
            setNext(true)
          }
        }
      }
    }
    setSquares(squares)
    const win = checkForWinner(squares)
    setWinner(win)
    console.log(win)
    console.log(winner)


  }


  const checkForWinner = (squares) => {

    for (let i = 0; i < 3; i++) {
      if (squares[0][i].value === squares[1][i].value &&
        squares[1][i].value === squares[2][i].value &&
        squares[0][i].value !== '') {
        return squares[0][i].value
      }
    }
    for (let i = 0; i < 3; i++) {
      if (squares[i][0].value === squares[i][1].value &&
        squares[i][1].value === squares[i][2].value &&
        squares[i][0].value !== '') {
        return squares[i][0].value
      }
    }

    if (squares[0][0].value === squares[1][1].value &&
      squares[1][1].value === squares[2][2].value &&
      squares[0][0].value !== '') {
      return squares[0][0].value
    }
    if (squares[0][2].value === squares[1][1].value &&
      squares[1][1].value === squares[2][0].value &&
      squares[0][2].value !== '') {
      return squares[0][2].value
    }
    return null
  }

  // const printWinner = () => {
  //   if (winner === null)
  // }


  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ...{winner} </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquareData} />
      </main>
    </div>
  );
}

export default App;
