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
  // console.log(squares);
  return squares;
}

const App = () => {


  const [squares, setSquares] = useState(generateSquares());
  const [activePlayer, setActivePlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState(null);
  const [numSquaresChecked, setNumSquaresChecked] = useState(0);


  const checkForWinner = () => {

    const isBoardFull = () => {
      if (numSquaresChecked < 9) {
        console.log('isBoardFull returns False');
        return false;
      } else {
        console.log('isBoardFull returns True');
        return true;
      }
    }

    const rowCheck = () => {
      for (let row = 0; row < 3; row += 1) {
        if (squares[row][0].value === squares[row][1].value && squares[row][1].value === squares[row][2].value && squares[row][0].value !== '') {
          console.log('rowCheck', squares[row][0].value);
          return squares[row][0].value;
        }
      }
      console.log('No completed rows!');
      return false;
    }

    const columnCheck = () => {
      for (let col = 0; col < 3; col += 1) {
        if (squares[0][col].value === squares[1][col].value && squares[1][col].value === squares[2][col].value && squares[0][col].value !== '') {
          console.log('columnCheck', squares[0][col].value);
          return squares[0][col].value;
        }
      }
      return false;
    }

    const diagonalLrCheck = () => {
      if (squares[2][0].value === squares[1][1].value && squares[1][1].value === squares[0][2].value && squares[1][1].value !== '') {
        return squares[1][1].value;
      }
      return false;
    }

    const diagonalRlCheck = () => {
      if (squares[0][0].value === squares[1][1].value && squares[1][1].value === squares[2][2].value && squares[1][1].value !== '') {
        return squares[1][1].value;
      }
      return false;
    }

    const resultChecks = rowCheck() || columnCheck() || diagonalLrCheck() || diagonalRlCheck();

    if (resultChecks) {
      console.log(resultChecks);
      return resultChecks;
    }

    if (!(isBoardFull() || resultChecks)) {
      console.log('Game in progress');
      return null;
    }

    if (isBoardFull) {
      console.log('It is a tie!');
      setWinner('Tie');
      return 'Tie';
    }
  }

  const updateGameState = (id) => {
    if (winner !== null) {
      return;
    }

    const updatedSquares = squares.map((square) => square)
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        let currentSquare = updatedSquares[row][col];
        if (currentSquare.id === id) {
          if (currentSquare.value) return; // clicking on the same square twice doesn't change things
          currentSquare.value = activePlayer;
          setNumSquaresChecked(numSquaresChecked + 1);
          // toggle the player after each players move
          if (activePlayer === PLAYER_1) {
            setActivePlayer(PLAYER_2);
          } else {
            setActivePlayer(PLAYER_1);
          }
        }
      }
    }
    setWinner(checkForWinner());
    setSquares(updatedSquares);
  }


  const resetGame = () => {
    setSquares(generateSquares());
    setWinner(null);
    setActivePlayer(PLAYER_1);
    setNumSquaresChecked(0);
  }

  const displayWinner = () => {
    if (winner === null) {
      return `Current Player ${activePlayer}`;
    } else {
      return `Winner is ${winner}`
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{displayWinner()}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateGameState} />
      </main>
    </div>
  );
}

export default App;

// .toUpperCase()