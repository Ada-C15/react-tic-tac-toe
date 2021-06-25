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
    for (let column = 0; column < 3; column += 1) {
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
  const [numSquaresClicked, setNumSquaresClicked] = useState(0);
  const [winner, setWinner] = useState('...');

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const updateGameState = (id) => {
    if (winner === PLAYER_1 || winner === PLAYER_2) return;

    const clickedSquares = [...squares];
    // console.log(clickedSquares)
      let row = 0;
      let column = 0;
      let clicked = false;

      while (row <3 && !clicked) {
        while (column <3 && !clicked) {
          let currentSquare = clickedSquares[row][column];
          if (currentSquare.id === id) {
            if (currentSquare.value !== '') return;
      
            currentSquare.value = currentPlayer;
            clicked = true;
        
            setNumSquaresClicked(numSquaresClicked + 1);
            if (currentPlayer === PLAYER_1) {
              setCurrentPlayer(PLAYER_2)
            } else {
                setCurrentPlayer(PLAYER_1);
            }
          }
          column += 1;
        }
      row += 1;
      column = 0;
      }
      setWinner(checkForWinner());
      setSquares(clickedSquares);
      }
    

  const checkForWinner = () => {
    // check diagonals for winner
    if (squares[0][0].value === squares[1][1].value && squares[1][1].value === squares[2][2].value & squares[0][0].value !== '') {
      return squares[0][0].value;
    } else if (squares[0][2].value === squares[1][1].value && squares[1][1].value === squares[2][0].value && squares[0][0].value !== '') {
      return squares[0][2].value;
    } 

    // check rows and columns for winner
    for (let i = 0; i < 3; i++) {
      if (squares[i][0].value === squares[i][1].value && squares[i][1].value === squares[i][2].value && squares[i][0].value !== '') {
        return squares[i][0].value;
      } else if (squares[0][i].value === squares[1][i].value && squares[1][i].value === squares[2][i].value && squares[0][i].value !== '') {
        return squares[0][i].value;
      }
    }
    
    // If winner is a Tie...
    for (let rows = 0; rows < 3; rows++) {
      for (let col = 0; col < 3; col++) {
        if (squares[rows][col].value === '') {
          return '...';
        }
      }}
    return 'a tie!'
  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Marisa's Tic Tac Toe</h1>
        <h2>It's {currentPlayer}'s turn</h2>
        <h2>{`The Winner is ${winner}`}</h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateGameState} />
      </main>
    </div>
  );
}

export default App;
