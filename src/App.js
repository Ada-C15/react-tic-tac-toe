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

  // ✅ Wave 1: Represents the state of the game board in a 2D array of objects 
  // ✅ Wave 1: Use the helper function `generateSquares`  to create the initial value of board state

  // Recall this syntax for reference:
  // const [pieceOfState, setPieceOfState] = useState('Initial value for pieceOfState.');
  const [squares, setSquares] = useState(generateSquares());

  // ✅ Wave 2:
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [numSquaresFilled, setNumSquaresFilled] = useState(0);

  const [winner, setWinner] = useState(null);


  // ✅ Wave 2: create a method that updates the game state appropriately (Try utilizing the Square's ID value, which is unique to each square)
  const updateSquares = (id) => {
    if (winner !== null) return;

    const newSquares = [...squares];
    let row = 0;
    let col = 0;
    let found = false;

    while (row < 3 && !found) {
      while (col < 3 && !found) {
        let currentSquare = newSquares[row][col];
        if (currentSquare.id === id) {
          // console.log(currentSquare);
          if (currentSquare.value !== '') return;

          found = true;
          currentSquare.value = currentPlayer;
          setNumSquaresFilled(numSquaresFilled + 1);
          if (currentPlayer === PLAYER_1) {
            setCurrentPlayer(PLAYER_2)
          } else {
            setCurrentPlayer(PLAYER_1);
          }
        }
        col += 1;
      }
      row += 1;
      col = 0;
    }
    setWinner(checkForWinner());
    setSquares(newSquares);
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

    // ✅ Wave 1: Renders a `Board` component
    // ✅ Wave 2: The PropTypes of Board state that there is a required prop named `onClickCallback` - The value of this prop must be a function
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
