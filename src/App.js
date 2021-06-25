import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';
let gameCount = 0;
let winner = ''

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

const checkForWinner = (squares) => {
  if (gameCount <=3){
    return 'Keep Playing'
  }
    let patterns = [
    //rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //cols
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //dia
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < patterns.length; i++) {

    const [a, b, c] = patterns[i]; //destructuring assignment to get indexes
    if (squares[a].value && (squares[a].value === squares[b].value) && (squares[a].value === squares[c].value)) {
      return squares[a].value;
      }
    }
    if (gameCount < 9){
      return 'none yet'
    }
      return 'Tie';
}
const App = () => {

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [player, setMove] = useState(PLAYER_1);
  const gameMove = (squareToUpdate, squares) =>{
    const squaresUpdate = squares.map(square =>{
      if (square.id === squareToUpdate){
        if (player === PLAYER_1){
          if (square.set === false){
            // could refactor 
            square.value = 'x';
            square.set = true
            setMove(PLAYER_2);
            gameCount +=1;
          }
        }
        else if (player === PLAYER_2){
          if (square.set === false){
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
    winner = checkForWinner(squaresUpdate)
    return setSquares(squaresUpdate);
  }

  const resetGame = () => {
    setSquares(generateSquares());
    gameCount = 0;
    winner = '';
    setMove(PLAYER_1);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Now Playing: {player}</h2>
        <h2>The winner is ...{winner}-- Fill in for wave 3 </h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={gameMove}/>
      </main>
    </div>
  );
}

export default App;
