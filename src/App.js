import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';
//generates a 2D array of objects, when the user clicks their value gets populated. this is how we are keeping track of the state of the game. What does this array look like?
const generateSquares = () => {
  const squares = [];
  let row = 0;
  let col = 0;
  let currentId = 0;

  while (row < 3) {
    squares.push([]);
    while (col < 3) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      col += 1;
      currentId += 1;
    }
    row += 1;
    col = 0;
  }

  return squares;
}


const App = () => {
  const [squares, updateBoardValue] = useState(generateSquares());
  const [currentPlayer, changePlayer] = useState(true); 
  
  //updateSquares is going to run when a square is clicked
  const updateSquares = (id) => {
    const squaresCopy = [...squares];
      let row = 0;
      let col = 0;
      
      while (row < 3 ){
        while( col < 3 ){
          let currentSquare = squaresCopy[row][col]
          if (currentSquare.id === id && currentSquare.value === '') {
            if (currentPlayer === true){
              currentSquare.value = PLAYER_1
            } else {
              currentSquare.value = PLAYER_2
            }
          } 
        col += 1
        } 
      row += 1
      col = 0
    }
    updateBoardValue(squaresCopy)
    changePlayer(!currentPlayer)
      
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
  // setting onClickCallback as a prop for Board Component. Giving it the value of updateSquares()
  return (
      <div className="App">
        <header className="App-header">
          <h1>React Tic Tac Toe</h1>
          <h2>The winner is ... -- Fill in for wave 3 </h2>
          <button>Reset Game</button>
        </header>
        <main>
          <Board squares={squares} onClickCallback={updateSquares}/>
        </main>
      </div>
    )
};


export default App;
