import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';
//generates a 2D array of objects, when the user clicks their value gets populated. this is how we are keeping track of the state of the game. What does this array look like?
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

  // state keeping track of current board
  const [squares, setSquareValue] = useState(generateSquares());
  
  console.log(squares)
    //event handler to update the state, value, of a square when it is clicked on 
    const updateSquare = () => {
      console.log('clicked')
    }
   
    //state to keep track of currentPlayer
   const [currentPlayer, changePlayer] = useState(PLAYER_1);
   const rotatePlayer = () => {
     let player = ''
     if (currentPlayer === PLAYER_1){
       player = PLAYER_2
     } else if ( currentPlayer === PLAYER_2);{
       player = PLAYER_1
     }
     
     changePlayer(player)
   }
  

   
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback


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
