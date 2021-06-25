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
  const [player, setPlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState(null);

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const updateSquare = (id) => {    
    
    const squaresCopy = [...squares];

    for (let r = 0; r < squaresCopy.length; r++) {
      for (let c = 0; c < squaresCopy[r].length; c++) {
        if (squaresCopy[r][c].id === id && squaresCopy[r][c].value === '') {
          squaresCopy[r][c].value = player;
          if (player === PLAYER_1) {
            setPlayer(PLAYER_2);
          } else {
            setPlayer(PLAYER_1);
          };
        };
      };
    };

  setSquares(squaresCopy);
  setWinner(checkForWinner())

  }


  const checkForWinner = () => {
    // Complete in Wave 3
    
    // check each row
    for (let r = 0; r < 3; r++) {
      if (squares[r][0].value === squares[r][1].value 
          && squares[r][1].value === squares[r][2].value
          && squares[r][0].value !== '') {
            return squares[r][0].value;
          };
    };

    // check each column
    for (let c = 0; c < 3; c++) {
      if (squares[0][c].value === squares[1][c].value 
          && squares[1][c].value === squares[2][c].value
          && squares[0][c].value !== '') {
            return squares[0][c].value;
          };
    };

    // check diagonal cases
    if (squares[0][0].value === squares[1][1].value 
      && squares[1][1].value === squares[2][2].value
      && squares[0][0].value !== '') {
        return squares[0][0].value;
      };

    if (squares[0][2].value === squares[1][1].value 
      && squares[1][1].value === squares[2][0].value
      && squares[0][2].value !== '') {
        return squares[0][2].value;
      };
    
    return null;

  }

  const displayWinner = (winner === null ? `Current Player: ${player}` : `Winner is: ${winner}`);

  


  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{displayWinner}</h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board 
          squares={squares}
          onClickCallback={updateSquare}
        />
      </main>
    </div>
  );
}

export default App;
