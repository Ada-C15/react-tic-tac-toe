import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';
import Square from './components/Square';

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

  const [currentPlayerX, setCurrentPlayerX] = useState(true);
  // const currentValue = currentPlayerX? 'X' : 'O';

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  
  const updateGameState = (id) => {
  

    const game = squares.map((row) => {
      return row.map((square) => {
      if(id == square.id) {
        if(square.value === '') {
          if(currentPlayerX){
            square.value = 'x'
            setCurrentPlayerX(!currentPlayerX)
          } else{
            square.value = 'o'
            setCurrentPlayerX(!currentPlayerX)
          }
        } else {
            square.value = square.value
        }
        } 
        return square;
        });
      });
      // buttonIdClicked.push(id);
      setSquares(game);
  };




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
    // const [currentPlayerX, setCurrentPlayer] = useState(false)

    // const addPlayer = () => {
    //   setCurrentPlayer(!currentPlayer);
    // }
    // const currentValue = currentPlayerX? "X" : "O";
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
        onClickCallback ={updateGameState}
        />
      
      </main>
    </div>
  );
}

export default App;
