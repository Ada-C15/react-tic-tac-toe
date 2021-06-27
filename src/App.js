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
  const [currentPlayer, setGameState] = useState(PLAYER_1); 
  const [winner,setWinner] = useState('')
  
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const updateStateTurns = (id) => {
    // make an if statement
    if (currentPlayer === PLAYER_1) {
    setGameState(PLAYER_2)
    } else {
      setGameState(PLAYER_1)
    }
    
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        if (squares[row][col].id === id){
          if (squares[row][col].value === ''){
          squares[row][col].value = currentPlayer;
          }
        }
      }
    }
    checkForWinner();

    console.log(winner)
    if (winner !== '') {
      console.log('Herrrrr')
      resetGame();
    }
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
    // let winner=''
    // row 1
    if (squares[0][0].value === squares[0][1].value && squares[0][0].value === squares[0][2].value && squares[0][0].value !== ''){ 
      setWinner(squares[0][0].value)
    // row 2
    } else if (squares[1][0].value === squares[1][1].value && squares[1][0].value === squares[1][2].value && squares[1][0].value !== '') {
      setWinner(squares[1][0].value)
    // row 3
    } else if (squares[2][0].value === squares[2][1].value && squares[2][0].value === squares[2][2].value && squares[2][0].value !== '') {
      setWinner(squares[2][0].value)
    // col 1
    } else if (squares[0][0].value === squares[1][0].value && squares[0][0].value === squares[2][0].value && squares[0][0].value !== '') {
      setWinner(squares[0][0].value)
    // col 2
    } else if (squares[0][1].value === squares[1][1].value && squares[0][1].value === squares[2][1].value && squares[0][1].value !== '') {
      setWinner(squares[0][1].value)
    // col 3
    } else if (squares[0][2].value === squares[1][2].value && squares[0][2].value === squares[2][2].value && squares[0][2].value !== '') {
      setWinner(squares[0][2].value)
    //diag 1
    } else if (squares[0][0].value === squares[1][1].value && squares[0][0].value === squares[2][2].value && squares[0][0].value !== '') {
      setWinner(squares[0][0].value)
    //diag 2
    } else if (squares[0][2].value === squares[1][1].value && squares[0][2].value === squares[2][0].value && squares[0][2].value !== '') {
      setWinner(squares[0][2].value)
    } 
  }


  const resetGame = () => {
    // Complete in Wave 4
    setSquares(generateSquares());
    setGameState(PLAYER_1); 
    setWinner('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>

        <h2>Winner is {winner}</h2> 
        
        <button onClick={resetGame}>Reset Game</button>
      </header>
      
      <main>
        <Board squares={squares} onClickCallback={updateStateTurns}/>
      </main>
    </div>
  );
}

export default App;
