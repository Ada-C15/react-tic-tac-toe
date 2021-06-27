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

  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setGameState] = useState(PLAYER_1); 
  const [winner,setWinner] = useState('')
  

  const updateStateTurns = (id) => {
    
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
  
    if (squares[0][0].value === squares[0][1].value && squares[0][0].value === squares[0][2].value && squares[0][0].value !== ''){ 
      setWinner(squares[0][0].value)
    } else if (squares[1][0].value === squares[1][1].value && squares[1][0].value === squares[1][2].value && squares[1][0].value !== '') {
      setWinner(squares[1][0].value)
    } else if (squares[2][0].value === squares[2][1].value && squares[2][0].value === squares[2][2].value && squares[2][0].value !== '') {
      setWinner(squares[2][0].value)
    } else if (squares[0][0].value === squares[1][0].value && squares[0][0].value === squares[2][0].value && squares[0][0].value !== '') {
      setWinner(squares[0][0].value)
    } else if (squares[0][1].value === squares[1][1].value && squares[0][1].value === squares[2][1].value && squares[0][1].value !== '') {
      setWinner(squares[0][1].value)
    } else if (squares[0][2].value === squares[1][2].value && squares[0][2].value === squares[2][2].value && squares[0][2].value !== '') {
      setWinner(squares[0][2].value)
    } else if (squares[0][0].value === squares[1][1].value && squares[0][0].value === squares[2][2].value && squares[0][0].value !== '') {
      setWinner(squares[0][0].value)
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
        <Board squares={squares} onClickCallback={updateStateTurns} />
      </main>
    </div>
  );
}

export default App;
