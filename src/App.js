import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

// const PLAYER_1 = 'X';
// const PLAYER_2 = 'O';

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


  const [squares, setSquares] = useState(generateSquares());
  const [xPlayer, setNext] = useState(true);
  const [winner, setWinner] = useState(null);



  const updateSquareData = (id) => {
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        let square = squares[row][col]
        if (square.id === id) {
          if (xPlayer === true) {
            square.value = 'x'
            setNext(false)
          }
          else {
            square.value = 'o'
            setNext(true)
          }
        }
      }
    }
    setSquares(squares)
    const win = checkForWinner(squares)
    setWinner(win)




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




  const resetGame = () => {
    // Complete in Wave 4
    // if (winner === 'x' || 'o') {
    //   setSquares(generateSquares())
    // }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {winner}</h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquareData} />
      </main>
    </div>
  );
}

export default App;
