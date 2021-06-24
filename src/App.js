import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';
let gameCount = 0;

const generateSquares = () => {
  //can this be created as flat after wave 5?
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
        set: false
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
  const [player, setMove] = useState(PLAYER_1);
  const gameMove = (squareToUpdate, squares) =>{
    const squaresUpdate = squares.map(square =>{
      if (square.id === squareToUpdate){
        if (player == PLAYER_1){
          if (square.set == false){
            // could refactor 
            square.value = 'x';
            square.set = true
            setMove(PLAYER_2);
            gameCount +=1;
          }
        }
        else if (player == PLAYER_2){
          if (square.set == false){
            square.value = 'o';
            square.set = true
            setMove(PLAYER_1);
            gameCount +=1;
          }
        }
        return square;
      } else {
        return square;
      }
    })
    return setSquares(squaresUpdate);
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
        <h2>Now Playing: {player}</h2>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={gameMove}/>
      </main>
    </div>
  );
}

export default App;
