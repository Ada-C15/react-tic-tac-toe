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

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const [turn, setTurn] = useState(true);
  const [foundWinner, getWinner] = useState(false);
  const [winner, showWinner] = useState('PLAY!!');


  const updateSquare = (updatedSquare)=>{
      if(foundWinner === false){
        const nextSquare =[];
        squares.forEach((row)=>{
          const changeRow = [];
          row.forEach((square)=>{
            if(square.id===updatedSquare.id && turn===true && updatedSquare.value ===''){
              updatedSquare.value = PLAYER_1;
              changeRow.push(updatedSquare);
            }
            else if(square.id===updatedSquare.id && turn===false && updatedSquare.value ===''){
              updatedSquare.value = PLAYER_2;
              changeRow.push(updatedSquare);
            }
            else {
              changeRow.push(square);
            };
          })
          nextSquare.push(changeRow);
        })
  
        setSquares(nextSquare);
        // checkForWinner(nextSquare);
        setTurn(!turn);
      
      }
  }


  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go across each row to see if 
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
        <h2>{winner} </h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare} />
      </main>
    </div>
  );
}

export default App;
