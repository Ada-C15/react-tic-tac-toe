import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'x';//change to lowercase or tests wont pass
const PLAYER_2 = 'o';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]); //adding square to squares
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      }); //creating a 3x3 array; each square has an id and value
      currentId += 1;
    }
  }

  return squares; //board is constructed
}

const App = () => {

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  //Set initial state, to player 1's turn
  const[currentPlayer,setCurrentPlayer]=useState(PLAYER_1);
  //initial number of squares filled equals 0
  const[numSquaresFilled,setNumSquaresFilled]=useState(0);
  //intial winner is Null
  const[winner,setWinner] = useState(null);
  

//PSE code, check for winner
//accessing value of squares on board through .value notation
  const checkForWinner = () => {

    let i=0;
    while(i<3){
      // rows match?
      if (squares[i][0].value === squares[i][1].value &&
        squares[i][2].value === squares[i][1].value &&
        squares[i][0].value !== '') {
        return squares[i][0].value;
      //columns match?
      } else if (squares[0][i].value === squares[1][i].value &&
        squares[2][i].value === squares[1][i].value &&
        squares[0][i].value !== '') {
        return squares[0][i].value;
      }
      i += 1;
    }
    //Diagnol left to right
    if (squares[0][0].value === squares[1][1].value &&
      squares[2][2].value === squares[1][1].value &&
      squares[1][1].value !== '') {
      return squares[0][0].value;
    }
    //diagnol right to left
    if (squares[0][2].value === squares[1][1].value &&
      squares[2][0].value === squares[1][1].value &&
      squares[1][1].value !== '') {
      return squares[0][2].value;
    }

    return null;
    }
    
  const updateSquares = (id) => {
    if (winner !== null) return;

    const newSquares = [...squares];
    let row = 0;
    let col = 0;
    let found = false;

    while (row < 3 && !found) {
      while (col < 3 && !found) {
        let currentSquare = newSquares[row][col];
        //id of square matches the current square
        if (currentSquare.id === id) {
          console.log(currentSquare);
          if (currentSquare.value !== '') return;

          found = true;
          currentSquare.value = currentPlayer;
          setNumSquaresFilled(numSquaresFilled + 1);//one square behind
          if (currentPlayer === PLAYER_1) {
            setCurrentPlayer(PLAYER_2)
          } else {
            setCurrentPlayer(PLAYER_1);
          }
        }
        col += 1;
      }
      row += 1;
      col = 0;
    }
    setWinner(checkForWinner());
    setSquares(newSquares); //updating square content
  }

  const resetGame = () => {
    // Complete in Wave 4
    setSquares(generateSquares());//setting squares to intial empty board
    setCurrentPlayer('x');
    setNumSquaresFilled(0);
    setWinner(null);
  }
//if winner == null, then game continue
//else winner is winner
  return (
    <div className="App">
      <header className="App-header">
        <h1>🐨 Saharai's Tic Tac Toe 🐨</h1>
        <h2>{winner === null ? `Current Player ${ currentPlayer }` : `Winner is ${ winner }`}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquares}/>
      </main>
    </div>
  );
}

export default App;
