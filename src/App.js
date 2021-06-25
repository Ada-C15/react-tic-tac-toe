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
  // This starts state off as a 2D array of JS objects with empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [isX, setIsX] = useState(true);

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  /////HOW do i activate the button the user picks? 

  const markSquare = (id) => {
    console.log(id)
    for(let i=0; i<squares.length; i++) {
      for(let j=0; j<squares[i].length; j++) {
        if (squares[i][j].id === id) {
          if (isX) {
            squares[i][j].value = 'X';
          }
          else{
            squares[i][j].value = 'O';
          }
        }
      };  
    };
    setIsX(!isX)
    setSquares(squares)
  };




  // let isX = true;
  // const turn = (isX) => {
  //   if (isX) {
  //     square.value = 'X'
  //     }
  //   else if (!isX) {
  //     square.value = "O"
  //   }  
  //   isX = !isX
  // }


  
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
        <Board 
          squares={squares} 
          onClickCallback={markSquare}
        />
      </main>
    </div>
  );
}

export default App;
