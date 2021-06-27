import React, { useState, useEffect } from 'react';
import './App.css';

import Board from './components/Board';
import Square from './components/Square';

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

  const [squares, setSquares] = useState(generateSquares());
  const [player, setPlayer] = useState(PLAYER_1);
  // const [result, setResult] = useState({winner: 'none', state: 'none'})


  // useEffect(() => {
  //   checkForWinner();
  // }, [squares]);

  // useEffect(() => {
  //   if (result.state != 'none') {
  //     alert(`Game Finished! Winning Player: ${result.winner}`);
  //   }
  // }, [result]);
  
  const changePlayers = () => {
    if (player === PLAYER_1) {
      setPlayer(PLAYER_2)
    } else {
      setPlayer(PLAYER_1)
    }
  };

  const markSquares = (squareId) => {

    for (let row = 0; row < 3; row +=1) {
      for (let col = 0; col < 3; col += 1) {
        if (squares[row][col].id===squareId && squares[row][col].value=='') {
          squares[row][col].value=player; 
        };
      };
    };
    setSquares(squares);
    changePlayers();
    checkForWinner();

  };


  const checkForWinner = () => {

    // columns 
    for (let index = 0; index < 3; index++) {
        if (squares[0][index].value===squares[1][index].value && 
          squares[1][index].value===squares[2][index].value &&
          squares[0][index].value!=='') {
            alert(`Game Finished! Winning Player: ${player}`);
            resetGame();
        };
    };

    // rows 
    for (let index = 0; index < 3; index++) {
      if (squares[index][0].value===squares[index][1].value && 
        squares[index][1].value===squares[index][2].value &&
        squares[index][0].value!=='') {
          alert(`Game Finished! Winning Player: ${player}`);
          resetGame();
      };
    };

    // diagonals 
    if (squares[0][0].value===squares[1][1].value && 
      squares[1][1].value===squares[2][2].value &&
      squares[0][0].value!=='') {
        alert(`Game Finished! Winning Player: ${player}`);
        resetGame();
    };

    if (squares[0][2].value===squares[1][1].value && 
      squares[1][1].value===squares[2][0].value &&
      squares[0][2].value!=='') {
        alert(`Game Finished! Winning Player: ${player}`);
        resetGame();
    };

    // check if tie
    // possibly try to use a counter?

  };


  const resetGame = () => {
    setSquares(generateSquares());
    setPlayer(PLAYER_1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is... {checkForWinner} </h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={markSquares} />
      </main>
    </div>
  );
};

export default App;
