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
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState(null);

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const updateSquare = (targetSquare) => {
    if (targetSquare.value !== '') {
      return 
    }
    //  This function creates an array of squares using the map method. We will have a nested list for each object or square.
    const newSquares = squares.map(row => 
      // Row is the parameter that the function is using to create a new array.
      // This will return a list of objects using the parameter square and the value of square.
      row.map(square => {
        // we have a parameter square we are saying if the id of the square is the same as our targetSquare we will get back  and object with id and current player.
      if (square.id === targetSquare.id) {
        return { id: square.id, value: currentPlayer}
        } else {
          // if not we will return square.
          return square;
        }
      })
    )
    
    setSquares(newSquares);
    setWinner(checkForWinner(squares));
  
    if (currentPlayer === PLAYER_1){
      setCurrentPlayer(PLAYER_2)
    } else{
      setCurrentPlayer(PLAYER_1)
    }
  }

  const checkForWinner = (squares) => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.


    for (let i = 0; i < 3; i++) {
    if (squares[i][0].value === squares[i][1].value && squares[i][1].value === squares[i][2].value && squares[i][0].value !== '') {
      return squares[i][0].value;
    } else if (squares[0][i].value === squares[1][i].value && squares[1][i].value === squares[2][i].value && squares[0][i].value !== ''){
      return squares[0][i].value;
    }

    if (squares[0][0].value === squares[1][1].value && squares[1][1].value === squares[2][2].value && squares[1][1].value !== '') {
      return squares[0][0].value;
    } else if (squares[0][2].value === squares[1][1].value && squares[1][1].value === squares[2][0].value && squares[1][1].value !== ''){
      return squares[0][2].value;
    }
    return null;
  }
  }





  // const resetGame = () => {
  //   // Complete in Wave 4
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Current Player {currentPlayer}</h2>
        <h2>Winner {checkForWinner}</h2>
        {/* <button>Reset Game</button> */}
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare}/>
      </main>
    </div>
  );
}

export default App;
