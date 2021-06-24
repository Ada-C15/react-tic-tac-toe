import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

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


  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  // J: make a change to squares (change internal data representation)
  // J: call set squares with that new value
  // J: only affect the data, don't touch UI, react does
  // J: find element with square.id (square is const)
  // J: setSquares will render new board with data

  // const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setNextPlayer] = useState('o'); 

  const togglePlayer = () => {

    const currentLetter = (currentPlayer === 'x' ? 'o' : 'x');
    setNextPlayer(currentLetter);

    return currentLetter;

  };

  // const playerLetter = currentPlayer ? 'X' : 'O';

  // const updatePlayer = () => {

  //     const togglePlayer = () => {
  //       nextPlayer(!currentPlayer);
  //     };

  //     const playerLetter = currentPlayer ? 'X' : 'O';

  //     // if (currentPlayer === 'X') {
  //     //   changePlayer(currentPlayer = 'O');
  //     // } else {
  //     //   changePlayer('X');
  //     // };
      
  //   };

  const [squares, setSquares] = useState(generateSquares());

  const updateSquare = (squareID) => {

    for(let i=0; i < squares.length; i++) {
      for(let j=0; j < squares[i].length; j++) {

        if (squareID === squares[i][j]['id']) {
          if (squares[i][j]['value']) {
            return;
          }

          squares[i][j]['value'] = togglePlayer(); // pass in value for whoever is playing
        }
        

      };

    setSquares(squares);

    };

    // console.log(squares)
  }



  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.

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
        <Board squares={squares} onClickCallback={updateSquare}/>
      </main>
    </div>
  );
}

export default App;
