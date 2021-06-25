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
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_2);
  const [winner, setWinner] = useState('Winner is...');
  // 'Winner is x'
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const onClickCallback = (id) => {
    squares.map((row) => {
      return row.map((square) => {
        if (square.id === id) {
          if (!square.value) {
            if (currentPlayer === PLAYER_1) {
              square.value = PLAYER_2
              setCurrentPlayer(PLAYER_2)
            } else {
              square.value = PLAYER_1
              setCurrentPlayer(PLAYER_1)
            }
          }

        }
        setSquares(squares => [...squares])
        checkForWinner()
        return square
      })
    })
   

  }

  const checkForWinner = () => {
    if (checkRows()) {
    };
    if (checkColumns()) {
    };
    if (checkDiag()) {
    };

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

  const checkRows = () => {
    for (let i = 0; i < 3; i++){
      if (squares[i][0].value === squares[i][1].value && squares[i][1].value === squares[i][2].value) {
        setWinner(`Winner is ${squares[i][0].value}`)
        return true
      }
    }
    return false
  }
  const checkColumns = () => {
    for (let i = 0; i < 3; i++){
      if (squares[0][i].value === squares[1][i].value && squares[1][i].value === squares[2][i].value) {
        setWinner(`Winner is ${squares[0][i].value}`)
        return true
      }
    }
    return false
    
  }
  const checkDiag = () => {

    if (squares[0][0].value === squares[1][1].value && squares[1][1].value === squares[2][2].value) {
      setWinner(`Winner is ${squares[0][0].value}`)
      return true
    }
    if (squares[0][2].value === squares[1][1].value && squares[1][1].value === squares[2][0].value) {
      setWinner(`Winner is ${squares[0][2].value}`)
      return true
    }
    return false
  
  }


  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner} </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <div className="grid"><Board squares={squares} onClickCallback={(id) => onClickCallback(id)}/></div> 
      </main>
    </div>
  );
}

export default App;
