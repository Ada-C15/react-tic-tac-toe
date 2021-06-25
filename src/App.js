import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';
const WINNER_TBD = '';

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
  const [winner, setWinner] = useState(WINNER_TBD);

  // Wave 2

  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callbacks
  const updateSqVal = (id) => {
    if (!squares[Math.floor(id/3)][id%3]['value'] && !winner ) {
      const newSq = [...squares];
      newSq[Math.floor(id/3)][id%3]['value'] = currentPlayer;
      setSquares(newSq);
      (currentPlayer === PLAYER_1) ? setCurrentPlayer(PLAYER_2) : setCurrentPlayer(PLAYER_1)
      setWinner(checkForWinner());
    }; 
  }

  // check winner helper function
  const checkSame = (x, y, z) => {
    if (x === 'o' && y === 'o' && z === 'o') {
      return 'o'
    } else if (x === 'x' && y === 'x' && z === 'x') {
      return 'x'
    };
  }

  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    for (let i=0; i<squares.length; i++) {
      let res = checkSame(squares[i][0]['value'], squares[i][1]['value'], squares[i][2]['value'])
      if (res) { return res };
    }
    // 2. Go down each column to see if
    //    3 squares in each column match
    for (let i=0; i<squares.length; i++) {
      let res = checkSame(squares[0][i]['value'], squares[1][i]['value'], squares[2][i]['value'])
      if (res) { return res };
    }
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.
    let res = checkSame(squares[0][0]['value'], squares[1][1]['value'], squares[2][2]['value'])
    if (res) { return res }    
    res = checkSame(squares[0][2]['value'], squares[1][1]['value'], squares[2][0]['value'])
    if (res) { return res } 
    // 4. No winner, it's a tie
    let sqVal = [];
    for (let row of squares) {
      for (let square of row) {
        sqVal.push(square.value) 
      }
    }
    if (!sqVal.includes('')) {
      return 'TIE'
    }
    return WINNER_TBD
  }

  // helper function to print game status 
  const changeGameStatus = () => {
    if (winner === 'TIE') {
      return "Wow, it's a TIE! 🙌"
    } else if (winner === WINNER_TBD) {
      return `Current player ${currentPlayer}`
    } else {
      return `Winner is ${winner}`
    }
  }

  const resetGame = () => {
    // Complete in Wave 4
    const newSq = generateSquares();
    setSquares(newSq);
    setWinner(WINNER_TBD)
  }

  return (
    <div className="App">           
      <header className="App-header">
        <h1> React Tic Tac Toe </h1>
        <h2>{changeGameStatus()}</h2>
        <button className='reset-btn' onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSqVal}/>
      </main>
    </div>
  );
}

export default App;
