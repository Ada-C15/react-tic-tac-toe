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

  const [currentPlayer, switchPlayer] = useState(PLAYER_1);

  // Wave 2
  const updateBoard = (updatedSquare) => {
    const newBoard = squares;
    for (let i=0; i < newBoard.length; i++) {
      let row = newBoard[i];
      for (let j=0; j < row.length; j++) {
        if (newBoard[i][j].id === updatedSquare.id) {
          if (newBoard[i][j].value !== updatedSquare.value) switchTurns();
          newBoard[i][j] = updatedSquare;
          break;
        }
      }
    }
  
    setSquares(newBoard);
  }

  const switchTurns = () => {
    if (currentPlayer === PLAYER_1) {
      return switchPlayer(PLAYER_2);
    } else {
      return switchPlayer(PLAYER_1);
    }
  }
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const checkForWinner = (board) => {
    const winningCombinations = [[1,2,3], [1,4,7], [7,8,9], [3,6,9], [3,5,7], [1,5,9], [4,5,6], [2,5,8]];
    const xs = [];
    const os = [];
    let finished = true;
    for (i=0; i < board.length; i++) {
      for (j=0; j < board.length; j++) {
        if (board[i][j].value === 'x') {
          xs.append(board[i][j].id);
        } else if (board[i][j].value === 'o') {
          os.append(board[i][j].id);
        } else if (board[i][j].value === '') {
          finished = false;
        }
      }
    }
    for (win of winningCombinations) {
      if (win.every((el) => {
        return xs.indexOf(el) !== -1;
      })) {
        return PLAYER_1;
      } else if (win.every((el) => {
        return os.indexOf(el) !== -1.
      })) {
        return PLAYER_2;
      }
    }
    if (finished) return 'tie';
    return null;
  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={ squares } onClickCallback={ updateBoard } currentPlayer={ currentPlayer } />
      </main>
    </div>
  );
}

export default App;
