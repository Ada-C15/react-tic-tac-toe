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
  const [userTurn, setTurn] = useState('x')
  const updateTurn = () => {
    let turn = (userTurn === 'x') ? 'o' : 'x';
    setTurn(turn)
  }
  const [squares, setSquares] = useState(generateSquares());
  const [turnCount, setTurnCount] = useState(0)
  const updateSquares = (id) => {
    let newSquares = squares.slice();
    newSquares.flat()[id].value = userTurn
    newSquares.flat()[id].disabled = true
    console.log(turnCount)
    if (!winner && turnCount < 8) {
    setSquares(newSquares)
    updateTurn()
    updateWinner(squares)
    setTurnCount(turnCount + 1)
    } else if (!winner && turnCount === 8) {
      setWinner('nobody')
    }
}
  const [winner, setWinner] = useState('')
  const updateWinner = (squares) => {
    if (squares[0][0].value === squares[0][1].value && squares[0][1].value === squares[0][2].value && squares[0][2] !== ''){
      setWinner(squares[0][0].value)
    } else if (squares[1][0].value === squares[1][1].value && squares[1][1].value === squares[1][2].value && squares[1][2] !== ''){
      setWinner(squares[1][0].value)
    } else if (squares[2][0].value === squares[2][1].value && squares[2][1].value === squares[2][2].value && squares[2][2] !== ''){
      setWinner(squares[2][0].value)
    } else if (squares[0][0].value === squares[1][0].value && squares[1][0].value === squares[2][0].value && squares[2][0] !== ''){
      setWinner(squares[0][0].value)
    } else if (squares[0][1].value === squares[1][1].value && squares[1][1].value === squares[2][1].value && squares[2][1] !== ''){
      setWinner(squares[0][1].value)
    } else if (squares[0][2].value === squares[1][2].value && squares[1][2].value === squares[2][2].value && squares[2][2] !== ''){
      setWinner(squares[0][2].value)
    } else if (squares[0][0].value === squares[1][1].value && squares[1][1].value === squares[2][2].value && squares[2][2] !== ''){
      setWinner(squares[0][0].value)
    } else if (squares[0][2].value === squares[1][1].value && squares[1][1].value === squares[2][0].value && squares[2][0] !== ''){
      setWinner(squares[0][2].value)
    } 
  }

  const resetGame = () => {
    setSquares(generateSquares())
    setWinner('')
    setTurnCount(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {winner} </h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquares}/>
      </main>
    </div>
  );
}

export default App;
