import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';

const generateSquares = () => {
  const squares = [];
  let currId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currId,
        value: '',
      });
      currId += 1;
    }
  }

  return squares;
}

const App = () => {

  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState('');
  const updateSquares = (id) => {
    // if winner, exit.
    if (winner === PLAYER_1 || winner === PLAYER_2) return;
    // if no winner
    const newSquares = [...squares];
    let row = 0;
    let col = 0;
    let filled = false;

    while (row < 3 && !filled) {
      while (col < 3 && !filled) {
        let currentSquare = newSquares[row][col];
        if (currentSquare.id === id) {
          if (currentSquare.value !== '') return;
          filled = true;
          currentSquare.value = currentPlayer;
          setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1)  
        }
        col += 1;
      }
      row += 1;
      col = 0;
    }
    setWinner(checkForWinner());
    setSquares(newSquares);
  }

  const checkForWinner = () => {
      let i = 0;
  
      while (i < 3) {
        if (squares[i][0].value === squares[i][1].value &&
          squares[i][2].value === squares[i][1].value &&
          squares[i][0].value !== '') {
          return squares[i][0].value;
        } else if (squares[0][i].value === squares[1][i].value &&
          squares[2][i].value === squares[1][i].value &&
          squares[0][i].value !== '') {
          return squares[0][i].value;
        }
        i += 1;
      }
      if (squares[0][0].value === squares[1][1].value &&
        squares[2][2].value === squares[1][1].value &&
        squares[1][1].value !== '') {
        return squares[0][0].value;
      }
  
      if (squares[0][2].value === squares[1][1].value &&
        squares[2][0].value === squares[1][1].value &&
        squares[1][1].value !== '') {
        return squares[0][2].value;
      }
      return null;
    }

  const resetGame = () => {
    setSquares(generateSquares());
    setCurrentPlayer('o');
    setWinner(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner === null ? `Current Player ${ currentPlayer }` : `Winner is ${ winner }`}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquares}/>
      </main>
    </div>
  );
}

export default App;
