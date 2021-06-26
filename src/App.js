import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const X = 'x';
const O = 'o';
const XWINS = 'xxx'
const OWUINS = 'ooo'

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
  const [player, setPlayer] = useState(X);
  const [winner, setWinner] = useState(null);
  const [turnsTaken, setTurns] = useState(0);
  // const [active, setActive] = useState(false)

  const checkForWinner = () => {
    let currentRow = '';
    let currentCol = '';
    let diagLeft = ''; // left diagonal
    let diagRight = ''; // right diagonal
    for (let rowindex in squares) {
      currentRow = '';
      currentCol = '';
      for (let row in squares[rowindex]) {
        currentRow += squares[rowindex][row].value;
      }
      for (let col in squares[rowindex]) {
        currentCol += squares[col][rowindex].value;
      }
      if (currentRow === XWINS || currentRow === OWUINS) {
        return currentRow[0];
      }
      if (currentCol === XWINS || currentCol === OWUINS) {
        return currentCol[0];
      }
      diagLeft += squares[rowindex][rowindex].value;
      diagRight += squares[rowindex][(squares.length - 1) - rowindex].value;
    }

    return (diagLeft === XWINS || diagLeft === OWUINS) ? diagLeft[0]
      : (diagRight === XWINS || diagRight === OWUINS) ? diagRight[0]
        : ((turnsTaken > 7 && (!winner))) ? 'Nobody'
          : null;
  }

  const refreshBoard = (squareId) => {
    if (winner !== null) return;

    const refresh = [...squares];
    // shallow 
    let row = 0; // change 
    let col = 0;
    let active = true;

    while (row < 3 && active) {
      while (col < 3 && active) {
        let currentMove = refresh[row][col];
        if (currentMove.id === squareId) {
          if (currentMove.value !== '') return;
          console.log(row + ',' + col);
          active = false;
          currentMove.value = player;
          setTurns(turnsTaken + 1);
          player === X ? setPlayer(O) : setPlayer(X);
        }
        col += 1;
      }
      row += 1;
      col = 0;
    }
    setWinner(checkForWinner());
    setSquares(refresh);
  }
  const resetGame = () => {
    setSquares(generateSquares());
    setPlayer(X);
    setTurns(0);
    setWinner(null);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner === null ? `Next: ${player}` : `Winner is ${winner}`}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={refreshBoard} />
      </main>
    </div>
  );
}

export default App;
