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
  const [currentPlayer, setPlayerState] = useState(PLAYER_1); //or is the state X? 

  //if current is player1 then change to player2;

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
    
      
      // onClick={() => {
      //   nextSquares[i] = isXNext ? "X" : "O";
      //   setSquares(nextSquares);
              
      // }}


    const squareId = (id) => {
      // console.log(id);
      // console.log(currentPlayer)
      setPlayerState(!currentPlayer);
      const player = currentPlayer ? PLAYER_1 : PLAYER_2;
      
      squares.forEach(row=>{
        row.forEach(square => {
          if (square.id === id) {
            if (player === PLAYER_1) {
              console.log(PLAYER_1)
              square.value = 'x'

            }else{
              console.log(PLAYER_2)
              square.value = 'o'
            }
          }
        })
      })
        
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
        <Board squares={squares} onClickCallback = {squareId}/>
        {/* Passing squares as props to Board */}
      </main>
    </div>
  );
}

export default App;
