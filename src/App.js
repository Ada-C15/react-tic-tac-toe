import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

const PLAYER_1 = 'x'
const PLAYER_2 = 'o'

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
  const [currentPlayer, setCurrentPlayer] = useState('x');
  const [winner, setWinner] = useState(null)
  let newBoard = [...squares]

  const updateSquare = (squareToUpdate) => {
    const row = Math.floor(squareToUpdate.id/3)
    const colume = squareToUpdate.id%3

    if (squareToUpdate.value === '') {
      squareToUpdate.value = currentPlayer
      newBoard[row][colume] = squareToUpdate
      if (currentPlayer === 'x') {
        setCurrentPlayer(PLAYER_2);
      } else {
      setCurrentPlayer(PLAYER_1)
      };
      setSquares(newBoard)
    }
    setWinner(checkForWinner())
  }
  
  const checkForWinner = () => {
    let i = 0;

    while (i < 3) {
      if (newBoard[i][0].value === newBoard[i][1].value &&
        newBoard[i][2].value === newBoard[i][1].value &&
        newBoard[i][0].value !== '') {
          return newBoard[i][0].value;
      } else if (newBoard[0][i].value === newBoard[1][i].value &&
        newBoard[2][i].value === newBoard[1][i].value &&
        newBoard[0][i].value !== '') { 
          return newBoard[0][i].value;
      }
      i += 1;
    }
    if (newBoard[0][0].value === newBoard[1][1].value &&
      newBoard[2][2].value === newBoard[1][1].value &&
      newBoard[1][1].value !== '') {
        return newBoard[0][0].value;
    }

    if (newBoard[0][2].value === newBoard[1][1].value &&
      newBoard[2][0].value === newBoard[1][1].value &&
      newBoard[1][1].value !== '') {
        return newBoard[0][2].value;
    }

    return null;
  }

  const resetGame = () => {
    setSquares(generateSquares())
    setCurrentPlayer('x')
    setWinner(null)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner === null ? `Current Player is ${currentPlayer}` : `Winner is ${winner}`}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board 
        squares={ squares }
        onClickCallback={ updateSquare } 
        />
      </main>
    </div>
  );
}

export default App;
