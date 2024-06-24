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
  const [winner, setWinner] = useState(null);
  const [usedSquare, updateUsedSquare] = useState(0)
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const updateSquare = (targetSquare) => {
    if (winner !== null) {
      return;
    }
    const newSquares = [...squares];
    let row = 0;
    let col = 0;
    let found = false;
    while (row < 3 && !found){
      while (col < 3 && !found){
        let currentSquare = newSquares[row][col];
        if(currentSquare.id === targetSquare.id){
          if (currentSquare.value !=='') return;
          found = true;
          currentSquare.value = currentPlayer;
          updateUsedSquare(usedSquare + 1);
        }
        col += 1;
      }
      row += 1;
      col = 0;
    }
    setWinner(checkForWinner(squares))
    setSquares(newSquares);
    if (currentPlayer === PLAYER_1){
      setCurrentPlayer(PLAYER_2)
    } else{
      setCurrentPlayer(PLAYER_1)
    }
  }

  const checkForWinner = (squares) => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.
    for (let i = 0; i < 3; i++) {
    if (squares[i][0].value === squares[i][1].value && squares[i][1].value === squares[i][2].value && squares[i][0].value !== '') {
      return squares[i][0].value;
    } else if (squares[0][i].value === squares[1][i].value && squares[1][i].value === squares[2][i].value && squares[0][i].value !== ''){
      return squares[0][i].value;
    }
  }
    if (squares[0][0].value === squares[1][1].value && squares[1][1].value === squares[2][2].value && squares[1][1].value !== '') {
      return squares[0][0].value;
    } else if (squares[0][2].value === squares[1][1].value && squares[1][1].value === squares[2][0].value && squares[1][1].value !== ''){
      return squares[0][2].value;
    }
    return null;
  }

  const resetGame = () => {
  //   // Complete in Wave 4
    setSquares(generateSquares());
    setCurrentPlayer(PLAYER_1);
    updateUsedSquare(0)
    setWinner(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        
        <h2>{winner == null ? `Current Player ${currentPlayer}` : `Winner is ${winner}`}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare}/>
      </main>
    </div>
  );
}

export default App;
