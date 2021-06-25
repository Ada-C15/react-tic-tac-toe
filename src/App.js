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
  const [currPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [currWinner, setWinner] =useState('No one yet')

  const updateSquareData = (updatedSquare) => {

    // const flatarr = squares.flat();
    const newSquares = squares.map(row =>{
      for (let j =0; j<row.length; j++){
        const square = row[j]
        if (square.id === updatedSquare.id) {
          square.value = currPlayer;
        }  
      }
      return row;    
    });
    setSquares(newSquares);
    if (currPlayer === PLAYER_1) {
      setCurrentPlayer(PLAYER_2)
    } else {
      setCurrentPlayer(PLAYER_1)

    }
    let finalWinner = checkForWinner(newSquares)
    console.log(finalWinner);
    setWinner(finalWinner);
    console.log('checkforwinner function passed sucessfully!')
  };


  const checkRows = (matrix) => {
    for (let i=0; i<matrix.length; i++) {
      const row = matrix[i];

      let squareSet = new Set(row.map(item =>item.value));

      if (squareSet.size === 1 && !squareSet.has(''))  {
        let winnerArr = Array.from(squareSet)
        console.log('we found the winner!')
        return(winnerArr[0])
      }}
      return false

  }

  const checkForWinner = (newSquares) => {
    const checkBoardRows = checkRows(newSquares);
    if (checkBoardRows) {return checkBoardRows};

    const inverseBoard = newSquares[0].map((_, colIndex) => newSquares.map(row => row[colIndex]));
    const checkBoardColumns = checkRows(inverseBoard);
    if (checkBoardColumns) {return checkBoardColumns};
    

    let firstdia = new Set([newSquares[0][0].value, newSquares[1][1].value, newSquares[2][2].value,])
    let seconddia = new Set([newSquares[0][2].value, newSquares[1][1].value, newSquares[2][0].value,])
    if (firstdia.size === 1 && !firstdia.has(''))  {
      let winnerArr = Array.from(firstdia)
      console.log('we found the winner in a diagonal!')
      return(winnerArr[0])
    }
    if (seconddia.size === 1 && !seconddia.has(''))  {
      let winnerArr = Array.from(seconddia)
      console.log('we found the winner in a diagonal!')
      return(winnerArr[0])
    }
    
    return('No one yet')

  }
    

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {currWinner} </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} 
        currPlayer ={currPlayer}
        onClickCallback = {updateSquareData}
        />
      </main>
    </div>
  );
}

export default App;