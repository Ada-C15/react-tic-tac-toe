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

  const [squares, setSquares] = useState(generateSquares());

  const [currentPlayer, switchPlayer] = useState(PLAYER_1);

  const [winningPlayer, declareWinner] = useState(null);

  const updateBoard = (updatedSquare) => {
    const newBoard = squares;
    let isSameBoard = true;
    for (let i=0; i < newBoard.length; i++) {
      let row = newBoard[i];
      for (let j=0; j < row.length; j++) {
        if (newBoard[i][j].id === updatedSquare.id) {
          if (newBoard[i][j].value !== updatedSquare.value) isSameBoard = false;
          newBoard[i][j] = updatedSquare;
          break;
        }
      }
    }

    setSquares(newBoard);

    let winner = checkForWinner(newBoard, currentPlayer);
    console.log('current player is ', currentPlayer);
    console.log('winner is ', winner);

    if (winner) {
      declareWinner(winner);
    }

    if (!isSameBoard) switchTurns();

  }

  const switchTurns = () => {
    if (currentPlayer === PLAYER_1) {
      return switchPlayer(PLAYER_2);
    } else {
      return switchPlayer(PLAYER_1);
    }
  }


  const checkForWinner = (board, player) => {
    const winningCombinations = [[0,1,2], [0,3,6], [6,7,8], [2,5,8], [2,4,6], [0,4,8], [3,4,5], [1,4,7]];
    const moves = [];
    let finished = true;
    for (let i=0; i < board.length; i++) {
      for (let j=0; j < board.length; j++) {
        if (board[i][j].value === player) {
          moves.push(board[i][j].id);
        } else if (board[i][j].value === '') {
          finished = false;
        }
      }
    }
    console.log('moves ', moves);
    for (let win of winningCombinations) {
      const isWinner = win.every((el) => {
        return moves.indexOf(el) !== -1;
      });
      if (isWinner) {
        return player;
      }
    }
    if (finished) return 'tie';
    return null;
  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  console.log('winningPlayer is set to ', winningPlayer);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is { winningPlayer } </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={ squares } onClickCallback={ updateBoard } currentPlayer={ currentPlayer } />
      </main>
    </div>
  );
};

export default App;
