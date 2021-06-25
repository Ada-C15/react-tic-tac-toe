import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

// const PLAYER_1 = 'X';
// const PLAYER_2 = 'O';


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

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const [currentPlayer, setNextPlayer] = useState('o'); 

  const togglePlayer = () => {

    const currentLetter = (currentPlayer === 'x' ? 'o' : 'x');
    setNextPlayer(currentLetter);

    return currentLetter;

  };

  const [winner, updateWinnerStatus] = useState(null)

  const [squares, setSquares] = useState(generateSquares());

  const updateSquare = (squareID) => {

    if (winner) {
      return;
    }

    const updatedSquares = [...squares]

    for(let i=0; i < updatedSquares.length; i++) {
      for(let j=0; j < updatedSquares[i].length; j++) {

        if (squareID === updatedSquares[i][j]['id']) {

          if (updatedSquares[i][j]['value']) {
            return;
          }

          updatedSquares[i][j]['value'] = togglePlayer(); // pass in value for whoever is playing
        }
        

      };

    setSquares(updatedSquares);
    let winnerResult = checkForWinner(updatedSquares);
    updateWinnerStatus(winnerResult)



    };
  }

  const checkForWinner = (squares) => {


    for(let i=0; i < squares.length; i++) {

      // check rows
      if ((squares[i][0]['value'] === squares[i][1]['value']) && (squares[i][1]['value'] === squares[i][2]['value']) && (squares[i][0]['value'] !== '')) {
        return squares[i][0]['value'];
      };
      
      // check columns
      if ((squares[0][i]['value'] === squares[1][i]['value']) && (squares[1][i]['value'] === squares[2][i]['value']) && (squares[0][i]['value'] !== '')) {
        return squares[0][i]['value'];
      };

    };

    // check diagonals
    if ((squares[0][0]['value'] === squares[1][1]['value']) && (squares[1][1]['value'] === squares[2][2]['value']) && (squares[0][0]['value'] !== '')) {
      return squares[0][0]['value'];
    };

    if ((squares[0][2]['value'] === squares[1][1]['value']) && (squares[1][1]['value'] === squares[2][0]['value']) && (squares[0][2]['value'] !== '')) {
      return squares[0][2]['value'];
    };

    let count = 0
    for(let i=0; i < squares.length; i++) {
      for(let j=0; j < squares.length; j++) {

        if (squares[i][j]['value']) {
          count += 1;
          if(count === 9) {
            return 'tie';
          };
        };
      };

      };

    return null;

  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {winner}</h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare}/>
      </main>
    </div>
  );
}

export default App;
