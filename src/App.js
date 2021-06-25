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
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const updateSquare = (id) => {
    const newSquares = squares.map((row) => {
      return row.map((square) => {
        // if square matches the id that got passed in and not empty
        if (square.id === id && !square.value) {
          square.value = currentPlayer
          setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1)
        }
        return square
      })
    })
    setSquares(newSquares)
    checkForWinner()
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

    // These are all the possibilities in the board to win
    // const lines = [
    //   [0,1,2],
    //   [3,4,5],
    //   [6,7,8],
    //   [0,3,6],
    //   [1,4,7],
    //   [2,5,8],
    //   [0,4,8],
    //   [2,4,6],
    // ];
    // for (let i = 0; i < lines.length; i++){
    //   const[a,b,c] = lines[i];
    //   if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
    //     return squares[a];
    //   }
    // }
    // return null;

    // Columns
    if (squares[0][0].value === squares[1][0].value && squares[1][0].value === squares[2][0].value && squares[0][0].value !== '') {
      return squares[0][0].value;
    }

    if (squares[0][1].value === squares[1][1].value && squares[1][1].value === squares[2][1].value && squares[0][1].value !== '') {
      return squares[0][1].value;
    }

    if (squares[0][2].value === squares[1][2].value && squares[1][2].value === squares[2][2].value && squares[0][2].value !== '') {
      return squares[0][2].value;
    }

    // Rows
    if (squares[0][0].value === squares[0][1].value && squares[0][1].value === squares[0][2].value && squares[0][0].value !== '') {
      return squares[0][0].value;
    }

    if (squares[1][0].value === squares[1][1].value && squares[1][1].value === squares[1][2].value && squares[1][0].value !== '') {
      return squares[1][0].value;
    }

    if (squares[2][0].value === squares[2][1].value && squares[2][1].value === squares[2][2].value && squares[2][0].value !== '') {
      return squares[2][0].value;
    }

    // Diagonals
    if (squares[0][0].value === squares[1][1].value && squares[1][1].value === squares[2][2].value && squares[0][0].value !== '') {
      return squares[0][0].value;
    }

    if (squares[0][2].value === squares[1][1].value && squares[1][1].value === squares[2][0].value && squares[0][2].value !== '') {
      return squares[0][2].value;
    }

    // if there is a space empty on the board

    // for (let row = 0; row < 3; row += 1) {
    //   for (let col = 0; col < 3; col += 1) {
    //     if (squares[row][col].value === '') {
    //       return '';
    //     }
    //   }
    // }
    if (squares.flat().includes('')) {  
      return null;
    }
    return 'Tie';
  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {checkForWinner()} </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare}/>
      </main>
    </div>
  );
}

export default App;
