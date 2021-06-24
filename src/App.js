import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

// const updateCandidate = (id) => {
//   const updatedCandidates = [...liveCandidates];

//   updatedCandidates.forEach((candidate) => {
//     if (candidate.id === id) {
//       candidate.votes += 1;
//     }
//   });

//   setCandidates(updatedCandidates);
// };


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


  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  // J: make a change to squares (change internal data representation)
  // J: call set squares with that new value
  // J: only affect the data, don't touch UI, react does
  // J: find element with square.id (square is const)
  // setSquares will render new board with data

  const updateSquare = (squareID) => {

    for(let i=0; i < squares.length; i++) {
      for(let j=0; j < squares[i].length; j++) {

        if (squareID === squares[i][j]['id']) {
          squares[i][j]['value'] = 'X'; 
        };

      };

    setSquares(squares);

    };

    console.log(squares)
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
