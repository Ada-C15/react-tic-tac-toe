import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';
import Square from './components/Square';

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
    const [winner, setWinner] = useState(null);
    const [turn, setTurn] = useState(PLAYER_1);

    const updateGame = (id) => {
      if (winner !== null) {
        return;
      }
      const updatedSquares = [];
      squares.flat().forEach((square) => {
        if (square.id === id && square.value === '') {
          square.value = turn; 
          if (turn === PLAYER_1) {  
            setTurn(PLAYER_2);
          } else if (turn === PLAYER_2){
            setTurn(PLAYER_1);
          }
        }
        updatedSquares.push(square);
      });
      const moreSquares = [];

      moreSquares.push(updatedSquares.slice(0, 3));
      moreSquares.push(updatedSquares.slice(3, 6));
      moreSquares.push(updatedSquares.slice(6, 9));

      setSquares(moreSquares);
      setWinner(checkForWinner(squares));
    };
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback


  const checkForWinner = (moreSquares) => {
    let winner = null;
    const leftTop = moreSquares[0][0].value;
    const leftBottom = moreSquares[2][0].value;
    const rightTop = moreSquares[0][2].value;
    const rightBottom = moreSquares[2][2].value;
    const center = moreSquares[1][1].value;

  
        if (leftTop === moreSquares[0][1].value && leftTop === rightTop && leftTop !== '') {
          winner = leftTop; //top row

      } else if (moreSquares[1][0].value === center && moreSquares[1][0].value === moreSquares[1][2].value && center !== '') {
          winner = center; // middle row

      } else if (leftBottom === moreSquares[2][1].value && leftBottom === rightBottom && leftBottom !== '') {
          winner = leftBottom; // bottom row

      } else if (leftTop === moreSquares[1][0].value && leftTop === leftBottom && leftBottom !== '') {
          winner = leftTop; // left column

      } else if (moreSquares[0][1].value === center && moreSquares[0][1].value === moreSquares[2][1].value && center !== '') {
          winner = center; // center column

      } else if (rightTop === moreSquares[1][2].value && rightTop === rightBottom && rightTop !== '') {
          winner = rightTop; //right col
          
      } else if (leftTop === center && leftTop === rightBottom && rightBottom !== '') {
          winner = center; //diag left

      } else if (rightTop === center && rightTop === leftBottom && rightTop !== '') {
          winner = center;  //diag right
          
      } 
      return winner;
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

  const resetGame = () => {
    // Complete in Wave 4
    setWinner(null);
    setTurn(PLAYER_1);
    setSquares(generateSquares());
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {winner} </h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board onClickCallback={updateGame} squares={squares} />
      </main>
    </div>
  );
}

export default App;
