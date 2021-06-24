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
  const [userTurn, setTurn] = useState('X')
  const updateTurn = () => {
    let turn = (userTurn === 'X') ? 'O' : 'X';
    setTurn(turn)
  }
  const [squares, setSquares] = useState(generateSquares());
  const updateSquares = (id) => {
    let newSquares = squares.slice();
    newSquares.flat()[id].value = userTurn
    setSquares(newSquares)
    updateTurn()
    updateWinner(squares)
    
  }

  const [winner, setWinner] = useState('...');
  const updateWinner = () => {
    setWinner('X');
    console.log(winner)
  }



    
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.

  // 

  const resetGame = () => {
    setSquares(generateSquares())
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {winner} </h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquares}/>
      </main>
    </div>
  );
}

export default App;
