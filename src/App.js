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
  const [goesFirst, goesNext] = useState(PLAYER_1)
  const [winner, setWinner] = useState('...')

  const [squares, setSquares] = useState(generateSquares());
  



  const turn = () => {
    if (goesFirst === PLAYER_1) {
      goesNext(PLAYER_2);
    } else {
      goesNext(PLAYER_1)
    };
  
  };




  const play = (updatedSquare) => {
    const board = [];
    let i = 0;
    squares.forEach((row) => {
      board.push([]);
      row.forEach((square) => {
        if (square.id === updatedSquare.id && square.value === '' && winner === '...') {
          
          updatedSquare.value = goesFirst
          console.log(square.value)
          board[i].push(updatedSquare);
          turn();
        } else {
          board[i].push(square);
        }
      });
      i+= 1
    });
    setSquares(board);
    checkForWinner(board);
  }
  
  

  const checkForWinner = (board) => {
    

    for (let row = 0; row < 3; row++) {
      const rows = board[row][0].value + board[row][1].value + board[row][2].value;
      whoWon(rows);
    }
    

    for (let column = 0; column < 3; column++) {
      const columns = board[0][column].value + board[1][column].value + board[2][column].value;
      whoWon(columns)
    }
    

    const diagonalOne = board[0][0].value + board[1][1].value + board[2][2].value
    whoWon(diagonalOne);


    const diagonalTwo = board[0][2].value + board[1][1].value + board[2][0].value
    whoWon(diagonalTwo);



  }

  const whoWon = (string) => {
    if (string === 'xxx') {
      setWinner(PLAYER_1)
    } else if (string === 'ooo') {
      setWinner(PLAYER_2)
    }
  }

  const resetGame = () => {
    setSquares(generateSquares());
    goesNext(PLAYER_1);
    setWinner('...');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {winner}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={play} goesFirst={goesFirst} />
      </main>
    </div>
  );
}

export default App;