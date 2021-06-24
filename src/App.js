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
  // console.log(squares);
  const [player, setPlayer] = useState(PLAYER_1);
  // why does clicking in the first or last box first set winner to 'undefined'?
  const [winner, setWinner] = useState(null);
  const [squaresFilled, setSquaresFilled] = useState(0);
  // Will we need to make more variables to track state here? Player1/Player2, winner/noWinner?

  // Wave 2
  // You will need to create a method to change the square
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const changeSquares = (id) => {
    // Does the ... clone squares into a new array?
    const newSquares = [...squares];

    // could I repeat the same logic I used to make a 1D array in Board here?
    // seems redundant that we repeat the logic...could I make a helper function?
    newSquares.forEach(board => {
      board.forEach(square => {
        if (square.id === id && square.value === '') {
          square.value = player
          if (player === PLAYER_1) {
            setPlayer(PLAYER_2)
            setSquaresFilled(squaresFilled + 1)
          } else if (player === PLAYER_2) {
            setPlayer(PLAYER_1)
            setSquaresFilled(squaresFilled + 1)
          }
        }
      })
    })

    setSquares(newSquares);
    // something is going on with checkForWinner where it's not setting to null
    setWinner(checkForWinner());
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

    // something freaky is going on with the last box
    // Three xs on bottom row not being identified as a winner
    ///

    // vertical cases
    for (let i = 0; i < 3; i++) {
      if (squares[0][i].value === squares[1][i].value &&
        squares[1][i].value === squares[2][i].value) {
          return squares[0][i].value
        }
    }

    // horizontal cases
    for (let i = 0; i < 3; i++) {
      if (squares[i][0].value === squares[i][1].value &&
        squares[i][1].value === squares[i][2].value) {
          return squares[i][0].value
        }
    }

    // diagonal cases
    if (squares[0][0].value === squares[1][1].value &&
      squares[1][1].value === squares[2][2].value) {
        return squares[0][0].value
      }
    if (squares[0][2].value === squares[1][1].value &&
      squares[1][1].value === squares[2][0].value) {
        return [squares][0][2].value
      }

    return null;
    // something about this last return statement isn't right
  }

  // console.log(checkForWinner())

  // something about this function isn't right, either
  const printWinner = () => {
    if (winner === null && squaresFilled === 9){
      return (`It's a tie!`)
    }
    else if (winner === null) {
      return (`Current Player ${player}`)
    }
    else if (winner === 'x' || winner === 'o') {
      return (`Winner is ${winner}`)
    }
  }

  const resetGame = () => {
    // Complete in Wave 4
    setPlayer(PLAYER_1);
    setSquares(generateSquares());
    setSquaresFilled(0);
    setWinner(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{printWinner()}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={changeSquares} />
      </main>
    </div>
  );
}

export default App;
