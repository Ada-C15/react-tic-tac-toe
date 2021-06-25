import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

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

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [player, setPlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState(null);

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const markBoard = (id) => {
    squares.forEach((row)=>{
      row.forEach(square=> {
        if (square.id === id && square.value === ''){
          if (player === PLAYER_1) {
            setPlayer(PLAYER_2);
            square.value = 'x'
          } else {
            setPlayer(PLAYER_1);
            square.value = 'o'
          }
        }
      })
    })
    checkForWinner()
  }
  
  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go across each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.
   
    // push values of each square into empty list
    // if the length of list is 9, implying the board is full with no winner,
    // we have a tie
    let entireBoard = []
    squares.forEach((row)=>{
      row.forEach(square=> {
        if (square.value){
          entireBoard.push(square.value)
        }
      })
    })

    // a bug exists here somewhere or elsewhere
    if (entireBoard[0] === entireBoard[1] && entireBoard[0] === entireBoard[2]){
      setWinner(entireBoard[0]);
    } 
    if (entireBoard[3] === entireBoard[4] && entireBoard[3] === entireBoard[5]){
      setWinner(entireBoard[3]);
    } 
    if (entireBoard[6] === entireBoard[7] && entireBoard[7] === entireBoard[8]){
      setWinner(entireBoard[6]);
    } 
    if (entireBoard[0] === entireBoard[4] && entireBoard[0] === entireBoard[8]){
      setWinner(entireBoard[0]);
    } 
    if (entireBoard[2] === entireBoard[4] && entireBoard[2] === entireBoard[6]){
      setWinner(entireBoard[2]);
    }
    if (entireBoard.length===9){
      setWinner("It's a TIE!")
    }
  }

  const resetGame = () => {
    // Complete in Wave 4
    setPlayer(PLAYER_1);
    setSquares(generateSquares())
    setWinner(null)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ...{winner}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={markBoard} currentPlayer={player}/>
      </main>
    </div>
  );
}

export default App;
