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
  const [squares, setSquares] = useState(generateSquares());


  //  State: 1 for keeping count of which square index has been clicked,
  //  1 for keeping track of which player_1 (X) or player_2 (O) is clicking which square
  //  1 for how many squares are filled, the game has to stop once 9 squares have been filled
  //  1 for the winner, to set either player_1 or player_2 equal to winner 

  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  // const [numSquaresFilled, setNumSquaresFilled] = useState(0);
  // const [winner, setWinner] = userState(null);



  // Wave 2
  // You will need to create a method to change the square When it is clicked on then pass it into the squares as a callback
  const updateSquares = (updatedSquare) => {

    
    //  check who the current player is
    if (currentPlayer == PLAYER_1) {
      setCurrentPlayer(PLAYER_2);
    } else {
      setCurrentPlayer(PLAYER_1);
    };

    // 


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
        <Board squares={squares} onClickCallback={updateSquares} />
      </main>
    </div>
  );
}

export default App;
