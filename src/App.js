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
  const [winner, setWinner] = useState('');
  const [activePlayer, switchActivePlayer] = useState(PLAYER_1);
  const [usedSquare, updateUsedSquare] = useState(0);

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const updateBoard = (id) => {
      const newBoard = [].concat(...squares);
      if (winner) return
      for (let square of newBoard) {
          if (square.id === id){
              if (square.value !== '') return
              square.value = activePlayer
              if (activePlayer === 'x') {
                  switchActivePlayer('o')
              } else {switchActivePlayer('x')}
          }
      }
      updateUsedSquare(usedSquare + 1);
      setSquares(squares)
      setWinner(checkForWinner())
  }

  const checkForWinner = () => {
    if (checkBoard('x')) {
        return 'x'
    } else if (checkBoard('o')) {
        return 'o'
    } else {
        return ''
    }
  }

  const checkBoard = (player) => {
    let i = 0;
    while (i < 3) {
        if (squares[i][0].value === squares[i][1].value && squares[i][1].value === squares[i][2].value && squares[i][0].value === player) {
            return true
        } else if (squares[0][i].value === squares[1][i].value && squares[1][i].value === squares[2][i].value && squares[2][i].value === squares[0][i].value && squares[0][i].value === player) {
            return true
        }
        i += 1
    }
    if (squares[0][0].value === squares[1][1].value && squares[1][1].value === squares[2][2].value && squares[2][2].value === squares[0][0].value && squares[0][0].value === player) {
        return true;
    } else if (squares[0][2].value === squares[1][1].value && squares[1][1].value === squares[2][0].value && squares[2][0].value === squares[0][2].value && squares[0][2].value === player) {
        return true;
    };
    return false;
  }

  const resetGame = () => {
      setSquares(generateSquares())
      setWinner('')
      updateUsedSquare(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner === '' ? `Current player is ${activePlayer}` : `Winner is ${winner}`}</h2>
        <h3>{(winner === '' && usedSquare === 9)  ? `It is a tie!` : `🥰 🥰 🥰 🥰 🥰 🥰`}</h3>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateBoard} />
      </main>
    </div>
  );
}

export default App;
