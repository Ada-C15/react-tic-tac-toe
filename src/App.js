import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';

const BOARD = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

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
  //2D array state with empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [countFilledSqare, setCountFilledSqare] = useState(0);
  const [winner, setWinner] = useState(null);

  // Wave 2
  // Creates a method to change the square 
  const handleClick = (id) => {
    const squaresCopy = [...squares] //clone an array with spread operator

    for(let row in squaresCopy) {
      for(let col in squaresCopy) {
        let filledSquare = squaresCopy[row][col];
    
        // if a user click a filled square or if game is won, return!
        if (winner || countFilledSqare === 9) {
          return;
        }

        if (filledSquare.id === id && filledSquare.value === '' && !winner) {
          filledSquare.value = currentPlayer;
          // Update states
          setCountFilledSqare(countFilledSqare + 1);
          setSquares(squaresCopy);
          switchPlayer(currentPlayer);
          setWinner(checkForWinner());
          return;
        };
      };  
    };
  }
  // helper funciton for handleClick() and resetGame()
  const switchPlayer = () => {
    currentPlayer === PLAYER_1 ? setCurrentPlayer(PLAYER_2) : setCurrentPlayer(PLAYER_1);
  }



  const checkForWinner = () => {
    // Wave 3
    for(let i in BOARD) {
      const [a, b, c] = BOARD[i]

      const squareValues = getValues();
      if (squareValues[a] && squareValues[a] === squareValues[b] && squareValues[b] === squareValues[c]) {
        return squareValues[a]; 
      };
    };
    return null;
  }
  // helper function for wave 3
  const getValues = () => {
    const squareValues = [];

    squares.forEach(square => {
      squareValues.push(square[0].value, square[1].value, square[2].value);
    });

    return squareValues;
  }

  const resetGame = () => {
    // Wave 4
    switchPlayer(winner);
    setSquares(generateSquares());
    setCountFilledSqare(0);
    setWinner(null);
  }

  //additional feature to set a tie. 
  const checkTie = () => {
    if (countFilledSqare === 9 && !winner) {
      return setWinner('Cat tie');
    };
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner === null ? `Current Player ${ currentPlayer }` : `Winner is ${ winner }`}</h2>
        <button className='anime-button' onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={handleClick}/>
      </main>
    </div>
  );
}

export default App;
